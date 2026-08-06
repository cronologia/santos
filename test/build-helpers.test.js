'use strict';
// Unit tests for build.js's pure helpers (zero-dependency; node --test).
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { esc, formatArchiveTs, renderCites, renderVizChips, decadeOf, translator, siteBase, alternates, localizeData } = require('../build.js');

test('esc escapes HTML metacharacters', () => {
  assert.equal(esc('<a href="x">&\'</a>'), '&lt;a href=&quot;x&quot;&gt;&amp;&#39;&lt;/a&gt;');
  assert.equal(esc(null), '');
  assert.equal(esc(5), '5');
});

test('formatArchiveTs renders a Wayback timestamp as YYYY-MM-DD', () => {
  assert.equal(formatArchiveTs('20260714120000'), '2026-07-14');
  assert.equal(formatArchiveTs(''), '');
  assert.equal(formatArchiveTs(undefined), '');
});

test('renderCites links known ids, passes raw URLs through, drops unknowns', () => {
  const nums = new Map([['wiki', 1], ['official', 2]]);
  const html = renderCites(['wiki', 'official'], nums);
  assert.match(html, /#ref-1/);
  assert.match(html, /#ref-2/);
  assert.match(renderCites(['https://example.org/x'], nums), /\[web\]/);
  assert.equal(renderCites(['nope'], nums), '');
  assert.equal(renderCites([], nums), '');
  assert.equal(renderCites(undefined, nums), '');
});

test('renderVizChips renders header pill links, or nothing when undeclared', () => {
  const html = renderVizChips([{ href: '#chronology', label: '📜 Chronology' }]);
  assert.match(html, /class="viz-chips"/);
  assert.match(html, /<a href="#chronology">📜 Chronology<\/a>/);
  assert.equal(renderVizChips([]), '');
  assert.equal(renderVizChips(undefined), '');
  assert.match(renderVizChips([{ href: '#a"b', label: '<x>' }]), /#a&quot;b.*&lt;x&gt;/);
});

test('decadeOf groups years into decades', () => {
  assert.equal(decadeOf(1970), '1970s');
  assert.equal(decadeOf(1979), '1970s');
  assert.equal(decadeOf(2026), '2020s');
});

test('translator returns the translation when present, else the English source', () => {
  const t = translator({ Hello: 'Hola' });
  assert.equal(t('Hello'), 'Hola');
  assert.equal(t('Missing'), 'Missing');
  assert.equal(t(null), null);
});

test('siteBase normalizes to exactly one trailing slash', () => {
  assert.equal(siteBase({ siteUrl: 'https://x.io/fsp' }), 'https://x.io/fsp/');
  assert.equal(siteBase({ siteUrl: 'https://x.io/fsp///' }), 'https://x.io/fsp/');
  assert.match(siteBase({}), /\/$/);
});

test('alternates emits a self canonical + hreflang for every locale + x-default', () => {
  const html = alternates('https://x.io/fsp/', 'a.html', 'pt');
  assert.match(html, /<link rel="canonical" href="https:\/\/x\.io\/fsp\/pt\/a\.html">/);
  assert.match(html, /hreflang="en" href="https:\/\/x\.io\/fsp\/en\/a\.html"/);
  assert.match(html, /hreflang="x-default" href="https:\/\/x\.io\/fsp\/"/);
});

test('localizeData translates whitelisted prose, sets lang, and never touches references', () => {
  const data = {
    meta: { title: 'T', description: 'Hello', language: 'en' },
    events: [{ year: 1970, title: 'Hello', place: 'Rome', date: '1970', dateVerified: true, sources: ['r'] }],
    figures: [{ name: 'Hello', role: 'Hello', sources: ['r'] }],
    references: [{ id: 'r', title: 'Hello', url: 'https://x', publisher: 'P', type: 'x' }],
  };
  const es = localizeData(data, { Hello: 'Hola' }, 'es');
  assert.equal(es.meta.language, 'es');
  assert.equal(es.meta.description, 'Hola');       // description: translated
  assert.equal(es.events[0].title, 'Hola');        // event title: translated
  assert.equal(es.figures[0].name, 'Hello');       // proper name: NOT translated
  assert.equal(es.references[0].title, 'Hello');   // reference title: NOT translated
  assert.equal(es.events[0].date, '1970');         // dates untouched
  // English (empty dict) is the identity transform on content.
  const en = localizeData(data, {}, 'en');
  assert.equal(JSON.stringify(en.events), JSON.stringify(data.events));
});

/* Out-of-vocabulary reference types (core#74). The closed vocabulary falls back
 * to the raw value, which puts an English word on a localized page — the exact
 * thing the fallback line's own comment forbids. This repo's data is clean, but
 * it had no reporter at all, so "no warning" here meant nothing was looking;
 * the test pins that the report actually happens, because a warning nobody
 * emits is the same as no warning. */
const { renderReference, UNKNOWN_REF_TYPES, UI } = require('../build.js');

test('an unknown reference type is collected for reporting, not swallowed', () => {
  UNKNOWN_REF_TYPES.clear();
  const ref = (type) => ({ id: 'x', title: 'T', url: 'https://e.org', publisher: 'P', type });
  renderReference(ref('official'), 1, {}, UI.es);
  assert.equal(UNKNOWN_REF_TYPES.size, 0, 'a known type must not be reported');

  renderReference(ref('primary'), 2, {}, UI.es);
  renderReference(ref('devotional'), 3, {}, UI.es);
  renderReference(ref('primary'), 4, {}, UI.es);
  assert.deepEqual([...UNKNOWN_REF_TYPES].sort(), ['devotional', 'primary'],
    'every distinct offender is named, and named once');

  // And the defect itself: the raw English word does reach the Spanish page.
  assert.match(renderReference(ref('devotional'), 5, {}, UI.es), /devotional/);
  UNKNOWN_REF_TYPES.clear();
});

test('refTypes: every declared type has a label in all three locales', () => {
  // The vocabulary and its translations drift apart silently — a type added to
  // en and forgotten in pt renders the English word on the Portuguese page,
  // which is the very defect core#74 is about.
  const en = Object.keys(UI.en.refTypes);
  for (const lang of ['es', 'pt']) {
    assert.deepEqual(Object.keys(UI[lang].refTypes).sort(), en.slice().sort(),
      `${lang} refTypes must cover exactly the same set as en`);
    for (const k of en) assert.ok(UI[lang].refTypes[k], `${lang} has no label for "${k}"`);
  }
  // The two added in core#74 are kinds of document, and must be present.
  for (const k of ['testimony', 'analysis']) assert.ok(UI.en.refTypes[k], `${k} missing`);
  // These are axes, not kinds, and must NOT be in the vocabulary — they belong
  // in publisherNote. Adding them would re-open the bug.
  for (const k of ['primary', 'devotional', 'institutional']) {
    assert.equal(UI.en.refTypes[k], undefined,
      `"${k}" is a perspective or a primacy claim, not a kind of document (core#74)`);
  }
});
/* The translation disclaimer states how a locale's strings were actually made.
 *
 * This is a provenance claim on the public page, so it is pinned here: the
 * template used to hardcode "machine translation" for es/pt, and every repo in
 * the 2026-08-05 bootstrap wave shipped that sentence over prose no machine had
 * touched. See cronologia/core#64. */
const { disclaimerFor } = require('../build.js');

test('disclaimerFor: English carries no translation note', () => {
  assert.equal(disclaimerFor({}, UI.en), null);
  assert.equal(disclaimerFor({ humanReviewed: true }, UI.en), null);
});

test('disclaimerFor: a human-reviewed cache says so, in both locales', () => {
  for (const lang of ['es', 'pt']) {
    assert.equal(disclaimerFor({ humanReviewed: true }, UI[lang]), UI[lang].disclaimers.reviewed);
  }
});

test('disclaimerFor: only translate.js provenance claims machine translation', () => {
  const byBackend = { generatedBy: 'scripts/translate.js via TRANSLATE_ENDPOINT' };
  assert.equal(disclaimerFor(byBackend, UI.es), UI.es.disclaimers.machine);
  assert.match(UI.es.disclaimers.machine, /autom/);
});

test('disclaimerFor: authored is the default, and unknown provenance is NOT machine', () => {
  // The wrong way to be wrong is to disclaim prose a person stands behind, so
  // anything that does not name the backend falls to `authored`.
  for (const meta of [
    {},
    null,
    undefined,
    { generatedBy: 'hand-authored by the assistant during the bootstrap' },
    // The provenance prose these repos actually write NAMES the script in order
    // to deny it. A substring match reports the exact opposite of the sentence.
    { generatedBy: 'hand-authored by the assistant (Claude) during the 2026-08-05 bootstrap — NOT produced by scripts/translate.js' },
    { generatedBy: 'unknown — record its real origin here' },
    { humanReviewed: false },
  ]) {
    assert.equal(disclaimerFor(meta, UI.pt), UI.pt.disclaimers.authored, JSON.stringify(meta));
  }
});

test('disclaimerFor: humanReviewed wins over a machine generatedBy, and only `true` counts', () => {
  const both = { humanReviewed: true, generatedBy: 'scripts/translate.js via TRANSLATE_ENDPOINT' };
  assert.equal(disclaimerFor(both, UI.es), UI.es.disclaimers.reviewed);
  // A truthy non-true value (a name, a date) must not be read as "reviewed".
  const sloppy = { humanReviewed: 'yes, by DJ' };
  assert.equal(disclaimerFor(sloppy, UI.es), UI.es.disclaimers.authored);
});
// --- collectTranslatable: the coverage report and the renderer, same set -----
//
// These two walks used to be written twice, in two files, under a comment
// asserting they matched. They did not, in both directions at once: the
// reporting copy skipped `references` (missing every publisherNote the pages
// render) and applied the general key set to `approvalLadder` (counting the
// closed `status` enum, and instructing whoever ran it to translate
// `not-found`). The bug that matters here is not either mistranslation — it is
// a coverage number that measures a set the renderer never uses. So the test
// is not "does it collect the right keys" but "is it the SAME set", derived by
// instrumenting localizeData and comparing.

const fs = require('node:fs');
const path = require('node:path');
const { collectTranslatable, keysFor, TRANSLATABLE_KEYS, SUBTREE_TRANSLATABLE } = require('../build.js');

/**
 * Every string localizeData actually hands to the translator, in walk order.
 *
 * The lookup is `Object.prototype.hasOwnProperty.call(dict, s)`, which on a
 * Proxy fires `getOwnPropertyDescriptor` — not `has`, and not `get`. Trapping
 * the wrong one yields an empty list, which would make the comparison below
 * pass for the wrong reason, so the trap is asserted to have fired.
 *
 * Empty and whitespace-only strings are dropped: localizeData passes them
 * through the translator (harmlessly, they can't be dictionary keys) while
 * collectTranslatable filters them, because listing "" as a string awaiting
 * translation is noise in a coverage report.
 */
function stringsSeenByLocalize(data) {
  const seen = [];
  const dict = new Proxy({}, {
    getOwnPropertyDescriptor: (_t, k) => { if (typeof k === 'string') seen.push(k); return undefined; },
  });
  localizeData(data, dict, 'es');
  assert.ok(seen.length > 0, 'instrumentation failed: the translator lookup was never observed');
  return seen.filter((s) => s.trim());
}

const LADDER_FIXTURE = {
  meta: { title: 'T', description: 'D', language: 'en', lastUpdated: '2026-01-01' },
  approvalLadder: {
    heading: 'How far the case went',
    note: 'A note the reader reads.',
    stages: [
      { label: 'Diocese', when: '1851', who: 'The bishop', status: 'favourable', outcome: 'Declared worthy of belief.' },
      { label: 'Rome', when: '1852', who: 'Pius IX', status: 'not-found', noDocument: 'Nothing located.' },
    ],
  },
  events: [{ year: 1851, date: '1851-09-19', dateVerified: true, title: 'A title', text: 'Some prose.', place: 'Grenoble' }],
  references: [{ id: 'r', title: 'A Book Nobody Should Translate', publisher: 'Someone', publisherNote: 'Devotional, cited for the date only.', type: 'book' }],
};

test('collectTranslatable returns exactly the strings localizeData translates', () => {
  const collected = collectTranslatable(LADDER_FIXTURE);
  const localized = stringsSeenByLocalize(LADDER_FIXTURE);
  assert.deepEqual(new Set(collected), new Set(localized),
    'the coverage walk and the render walk disagree — one of them is lying about what gets translated');
  assert.equal(collected.length, new Set(collected).size, 'collectTranslatable must deduplicate');
});

test('collectTranslatable honours the approvalLadder allowlist and skips the status enum', () => {
  const ladder = SUBTREE_TRANSLATABLE.approvalLadder;
  if (!ladder) {
    // This repo's dataset has no approval ladder, so it declares no allowlist and
    // the subtree falls through to the general keys. That is correct — but assert
    // the premise rather than just returning, so a repo that later grows a ladder
    // without an allowlist fails here instead of quietly translating its enum.
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'chronology.json'), 'utf8'));
    assert.ok(!data.approvalLadder,
      'the dataset has an approvalLadder but SUBTREE_TRANSLATABLE declares no allowlist for it — '
      + 'the status enum would be sent through the dictionaries and the localized build would fail');
    return;
  }
  const got = new Set(collectTranslatable(LADDER_FIXTURE));
  assert.ok(got.has('Declared worthy of belief.'));
  assert.ok(got.has('Nothing located.'));
  assert.ok(got.has('The bishop'));
  assert.ok(got.has('A note the reader reads.'));
  // `status` is prose elsewhere, which is exactly why it needs pinning here.
  assert.ok(TRANSLATABLE_KEYS.has('status'), 'precondition: status is generally translatable');
  assert.ok(!ladder.has('status'), 'precondition: not inside the ladder allowlist');
  assert.ok(!got.has('favourable'), 'translating the status enum breaks the localized build');
  assert.ok(!got.has('not-found'));
});

test('collectTranslatable includes references[].publisherNote but not the citation itself', () => {
  const got = new Set(collectTranslatable(LADDER_FIXTURE));
  assert.ok(got.has('Devotional, cited for the date only.'), 'publisherNote renders on the page');
  assert.ok(!got.has('A Book Nobody Should Translate'), "a book's title is its name");
  assert.ok(!got.has('Someone'));
});

test('keysFor resolves the nearest enclosing subtree and is sticky through descendants', () => {
  assert.equal(keysFor('references', null)[1], SUBTREE_TRANSLATABLE.references);
  // A nested object under references keeps the bibliographic key set.
  assert.equal(keysFor('anything', 'references')[1], SUBTREE_TRANSLATABLE.references);
  assert.equal(keysFor('anything', null)[1], TRANSLATABLE_KEYS);
  // A dataset key colliding with Object.prototype must not resolve to it.
  assert.equal(keysFor('constructor', null)[1], TRANSLATABLE_KEYS);
});
