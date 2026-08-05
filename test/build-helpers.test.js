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
