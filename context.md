# context.md — orientation for contributors

Read `AGENTS.md` first (operating rules); this file is orientation: what this
repo is, where it currently stands, and what is open.

## The subject

Five people, four apparitions, five centuries, one question: **how does the
Catholic Church decide that someone who reported an apparition was holy?**

This is not a chronology of apparitions. `cronologia` already has repos for
those — `guadalupe`, `lourdes`, `fatima`, and the others in the same family.
This repo is about the *causes*: the ecclesiastical process that runs from a
person's death through Servant of God, Venerable, Blessed and Saint, and the
dated documents that mark each step. As of the second pass it carries the whole
spine — introduction of the cause, decree on heroic virtues, decrees on
miracles, beatification, further miracle decrees, canonization — plus the
institutional acts (1588, 1969, 1983) that explain why the older and newer
paths do not look alike, and the one cause here that is still running.

The seed set is the five canonized seers of the four apparitions with the
largest cults, plus the sixth seer whose cause is in progress:

| Saint | Apparition | Beatified | Canonized |
|---|---|---|---|
| Juan Diego Cuauhtlatoatzin | Guadalupe, 1531 | 1990, John Paul II | 2002, John Paul II |
| Catherine Labouré | rue du Bac, 1830 | 1933, Pius XI | 1947, Pius XII |
| Bernadette Soubirous | Lourdes, 1858 | 1925, Pius XI | 1933, Pius XI |
| Francisco Marto | Fátima, 1917 | 2000, John Paul II | 2017, Francis |
| Jacinta Marto | Fátima, 1917 | 2000, John Paul II | 2017, Francis |
| Lúcia dos Santos | Fátima, 1917 | — | — (Venerable, 2023) |

Read the table backwards and the interesting shape appears: **the apparition
and the canonization are separated by anything from 82 years (Bernadette) to
471 (Juan Diego)**, and the canonizations themselves cluster in the twentieth
century. That clustering is the chronology's actual subject.

## The posture, stated once

Sanctity and miracles are **judgments**, and this dataset records judgments —
never the things judged.

- A canonization is recorded as: *this named pope, on this date, in this
  document, declared this person a saint.*
- An apparition approval is recorded as: *this named bishop, on this date,
  declared these reported events worthy of belief.*
- A miracle decree is recorded as: *this dicastery, on this date, declared that
  a miracle is established as worked by God through this person's intercession.*
  Never "N was cured". Where the decree names its subject the dataset names
  them (Juan Diego 2001); where it names nobody the dataset names nobody, even
  when press accounts do (the Marto decrees of 1999 and 2017).
- Neither is recorded as a statement that the reported events occurred. The
  1531 event text says "according to the Guadalupan account received by the
  Church"; the 1830, 1858 and 1917 events say the seers *reported*
  apparitions.
- The disambiguation section states the distinction explicitly, because
  collapsing it is the single most common error about this subject in both
  directions: treating a canonization as authenticating an apparition, and
  treating everyone connected with an apparition as a saint.

This is not scepticism and it is not piety. It is the same discipline the rest
of the `cronologia` family applies to political and juridical claims, applied
here.

## Current state (2026-08-06, second pass)

**Shipped.** 36 events (1588–2023), 6 figures, 3 organizations, 6
disambiguation entries, 5 facts, 34 references. Three locales — `en`
authoritative, `es` and `pt` complete at 169/169 translatable strings. Gate
green: validator, build, 148 tests.

**The reference base is now anchored on the gazette.** Nine volumes of *Acta
Apostolicae Sedis* (1913, 1923, 1925, 1931, 1933, 1946, 1947, 1990, 2002) are
cited **to the page**, and they carry the decrees themselves: the introductions
of the Labouré and Soubirous causes signed by Pius X, the heroic-virtues
decrees, four miracle decrees, both apostolic letters of beatification, and the
acts of the 1947 canonization. Alongside them: the Dicastery for the Causes of
Saints' own pages and decree registers for the Martos and Lúcia, two Holy See
press bulletins, the Carmel of Coimbra's postulation record, *Divinus
perfectionis Magister*, and the shrine and custodian records the bootstrap
already had.

**Two of thirty-six dates are flagged** (`dateVerified: false`), down from five
of sixteen:

| Date | Event | Why flagged |
|---|---|---|
| 1531-12-09 | Guadalupe apparitions | traditional dates; the underlying documentary question is contested and this repo does not propose to close it |
| 1923-11-18 | Soubirous declared Venerable | *AAS* vol. 15 dates the same decree three incompatible ways — see below |

### What the bootstrap got wrong, and it is worth knowing

The bootstrap concluded that **"vatican.va's published corpus has a hard edge at
roughly Pius XII"**, and flagged three of six papal acts on that basis. The
observation behind it was correct — the *homilies and speeches* trees hold
nothing for Pius XI — and the generalization drawn from it was not. **The *Acta
Apostolicae Sedis* archive on the same host reaches back to 1909**, as scanned
PDFs with an OCR text layer, and prints the acts in full. Every flag that rested
on the supposed edge is now cleared, several of them by documents that were four
clicks from a URL the dataset already cited.

The general lesson, which belongs to the family and not just this repo: **an
absence found in one tree of a site is a claim about that tree, not about the
site.** The sourcing rules already say a zero needs a positive control; this is
the same rule applied to a corpus boundary rather than to a search term.

Method, so it is repeatable:
`https://www.vatican.va/archive/aas/documents/AAS-<vol>-<year>-ocr.pdf`,
`pdftotext`, search the surname, then `pdftotext -layout -f <page>` to read the
subscription. The OCR is reliable for Latin body text and **unreliable for
proper names and page numbers** — page numbers were confirmed against running
heads and the volume index, and personal names in the older miracle decrees are
described rather than transcribed for exactly that reason.

### The one flag that is a genuine primary-source disagreement

*AAS* vol. 15 (1923) prints the Soubirous heroic-virtues decree with a
subscription reading `decimo nono calendas Decembres` — **13 November**. The
same decree says the pope chose "this present day, the twenty-sixth Sunday after
Pentecost", which in 1923 was **Sunday 18 November**; 13 November was a Tuesday.
The volume's chronological index files it under **"nov. 31"**, which is not a
date. The Roman-date arithmetic was checked against a control in the same
volume family — the 1925 *de tuto* decree subscribes `quarto nonas iunias` and
independently calls itself the third day after Pentecost, and both give 2 June —
so the contradiction is in the printed text, not in the reading of it. The
dataset carries 18 November flagged, with all three readings in the `dateNote`.

**`dateNote` renders now.** It did not at bootstrap: the field was written,
never translated, and never displayed (core#73). The renderer, the
`TRANSLATABLE_KEYS` entry and the two guard tests were ported from
`core/template` in this pass, and the repo's six notes — five from the
bootstrap, one new — are visible on all three locales for the first time.

**A stylesheet defect was fixed in the same change** (core#79): an unclosed
`@media print {` block meant every rule after it — the chronology spine,
swimlanes, the places-map cards, and `.date-note` itself — was nested inside a
print query and never applied on screen. `test/stylesheet-integrity.test.js`,
ported from `core/template`, now guards the brace balance.

**Something the flags still do not capture:** the 1830 and 1858 apparition dates
are marked `dateVerified: true` on the strength of the *custodian's* account —
the shrine describing its own site. That is a defensible standard, but it is a
weaker class of evidence than a page-cited decree in the gazette, and the
boolean cannot express the difference. Worth knowing before reading the flags as
a quality score.

## `saints/` — the folder-per-saint convention

`saints/<slug>/notes.md` holds each saint's **research trail**: the sources
consulted (including the ones that did not yield), the canonization-path dates
with their citations, and what remains unverified. Five folders, one per seed
saint. See `saints/README.md`.

Nothing in `saints/` is read by `build.js`. Adding or deleting a folder cannot
change a byte of `docs/`. This was deliberate for the bootstrap: it satisfies
the folder-per-saint instruction immediately without committing the repo to a
site architecture before that architecture is decided.

**Lúcia dos Santos now has a folder**, and the bootstrap's rule that
"`saints/` means canonized" has been replaced. Her cause is in the chronology as
four dated acts (death 2005, the derogation and opening of the diocesan inquiry
2008, Venerable 2023), so it produced a research trail of the same kind and size
as the other five, and the old rule would have left the one cause still running
as the one cause whose trail had nowhere to live. The directory now holds a
trail per *cause tracked*, not per *canonization completed*; her `notes.md`
opens by stating that she is not a canonized saint, and `saints/README.md`
records the change and its two limits.

## Open questions

1. **Per-saint page design — undecided, and blocking.** Should `saints/`
   generate `docs/<lang>/saints/<slug>.html` subpages, should the site stay
   single-page with saint filters, or should the split stand (research in
   `saints/`, site single-page)? `cronologia/olavo` already solved a closely
   related problem — twenty per-philosopher subpages, three locales, driven by
   a repo-local `philosophers.js` renderer and an optional dataset key — and
   that precedent is worth either copying or explicitly rejecting. See the
   design ticket on this repo. **Until it is decided, do not add a dataset key
   or a renderer for it.**
2. ~~The Labouré AAS lookups~~ — **closed.** Both acts are cited to the page,
   and her death date with them.
3. ~~The causes are missing~~ — **closed for the six seers.** Twenty acts were
   added: three institutional (1588, 1969, 1983), two for Juan Diego, four each
   for Labouré and Soubirous, four for the Martos and three for Lúcia. What is
   still absent by choice: the intermediate congregations
   (*antepraeparatoria* / *praeparatoria*), most *de tuto* decrees (recorded
   inside the neighbouring event's text rather than as rows), and the subjects
   of the cures that the decrees name only in a scan too poor to transcribe.
4. **The "youngest non-martyr saints" claim** (the Martos) is stated in the
   site's own voice in `facts` and again in the 2017 event text, but neither
   cited source states it. It is universally reported and probably true; it is
   still the weakest sentence in the dataset and should be attributed or
   softened.
5. **Jacinta Marto's birth date**, 5 vs 11 March 1910. Deliberately left open,
   and now sharper: the Holy See's own 2017 decree register gives **11 March**,
   so this is a disagreement between two official sources rather than between a
   custodian and devotional literature. The Fátima parish baptismal register
   would settle it.
6. **No `data/archives.json`.** No reference has a Wayback fallback yet. Run
   `scripts/archive-refs.js`; the shrine sites are the ones most likely to
   reorganize their URLs.
7. **Scope.** Should this repo hold *only* apparition seers, or all recently
   canonized saints? The current title and subtitle commit to apparition
   seers — the subtitle's date range widened to 1588–2023 in this pass, which
   is a change of *depth*, not of roster. Broadening the roster is still a
   title change, not just more rows.
8. **`AGENTS.md` is still the core template**, adapted only in its subject
   line. It describes `data/i18n/*.json` as machine-generated and not to be
   hand-edited; in this repo they are hand-authored and *are* the artifact to
   edit. Reconcile when the repo's own conventions have settled.
9. **The two remaining unnamed cure subjects.** The 1933 and 1946 Labouré
   decrees and the 1925 Soubirous decree all name their subjects; the scanned
   OCR does not render the names reliably, so the dataset describes rather than
   transcribes. A clean printing would let them be named the way the 2001 Juan
   Diego decree's subject is.
10. **A `refType` question the repo did not need to answer.** All 34 references
   fall inside the closed vocabulary, so the reporter ported in
   `cronologia/santos#5` prints no warning here.

## Two defects found by *reading the rendered Spanish and Portuguese pages*

Neither was visible to the validator, the test suite or the build. Both were
found the only way this class of defect is ever found — by reading the
localized output as text.

**1. `"type": "primary"` fell through the localization table.** Seven
references used it. It is not in `build.js`'s closed `refTypes` vocabulary, so
the compiler's fallback (`ui.refTypes[r.type] || r.type`) emitted the raw
English word *primary* on every Spanish and Portuguese page. The validator only
checks that `type` is a non-empty string, so nothing went red. Fixed by
retyping the seven to `official` — they are all official Holy See or Vatican
City State publications — while each `publisherNote` keeps saying "Primary
document — …", and `publisherNote` *is* translated. Adding `primary` to the
core vocabulary instead would have been a fork of shared template machinery for
one repo; if several repos want the distinction it belongs upstream in
`cronologia/core`.

**2. English prose was hiding in two non-translatable data fields.**
`figures[].dates` and `organizations[].founded` are correctly excluded from
`TRANSLATABLE_KEYS` — they are data, not prose — but they had been written as
English sentences:

- `"dates": "5 March 1910 (per the Shrine of Fátima; 11 March in older
  literature) – 20 February 1920"` — a full English clause on a Portuguese
  page, plus English month names on all six figures;
- `"founded": "1858 (grotto of Massabielle; first chapel begun 1862)"` and two
  more like it.

Fixed the way the family already writes these: `dates` became locale-neutral
(`1910-03-05 – 1920-02-20`; `c. 1474 – 1548` where the dates are traditional),
`founded` became a bare year, and every characterisation the parentheticals
carried moved into `role` and `relation`, which **are** translated. Five
dictionary keys were re-keyed and extended in `es.json` and `pt.json`
accordingly; `_meta.note` in both records that sync.

This is the same remedy the `publisher` / `publisherNote` test enforces for
references, and the general lesson is the template's own: **a field excluded
from translation must not be written as a sentence.**

### Known and accepted English on localized pages

`organizations[].name` still renders in English — "Shrine of Fátima
(Sanctuary of Our Lady of the Rosary of Fátima)", "Sanctuary of Our Lady of
Lourdes", "Chapel of Our Lady of the Miraculous Medal (rue du Bac)". `name` is
a proper name and the template never translates those; these are the
institutions' own English forms as published on their English-language sites.
Reference titles and publishers are likewise untranslated by design. If the
shrines' Portuguese and French forms are wanted, that is a schema question
(a `nameLocalized` key), not a dictionary gap.

