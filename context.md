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
dated documents that mark each step.

The seed set is the five canonized seers of the four apparitions with the
largest cults:

| Saint | Apparition | Beatified | Canonized |
|---|---|---|---|
| Juan Diego Cuauhtlatoatzin | Guadalupe, 1531 | 1990, John Paul II | 2002, John Paul II |
| Catherine Labouré | rue du Bac, 1830 | 1933, Pius XI | 1947, Pius XII |
| Bernadette Soubirous | Lourdes, 1858 | 1925, Pius XI | 1933, Pius XI |
| Francisco Marto | Fátima, 1917 | 2000, John Paul II | 2017, Francis |
| Jacinta Marto | Fátima, 1917 | 2000, John Paul II | 2017, Francis |

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

## Current state (2026-08-05, bootstrap)

**Shipped.** 16 events (1531–2017), 6 figures, 3 organizations, 4
disambiguation entries, 19 references. Three locales — `en` authoritative, `es`
and `pt` complete at 98/98 translatable strings. Gate green: validator, build,
144 tests.

**The reference base is unusually strong at the top and weak in the middle.**
Seven references are documents published on vatican.va: the 2002 Juan Diego
canonization homily, the 1990 beatification homily (Spanish only), the official
canonization biography, the 2000 and 2017 Marto homilies, Pius XII's 1947
address to the Labouré pilgrims, and *Acta Apostolicae Sedis* vol. 25 (1933).
Seven more are shrine and custodian records — official but devotional, and
labeled as such in each `publisherNote`. Four are Wikipedia, used only for
biographical dates pending primary verification, and never load-bearing alone.

**Five of sixteen dates are flagged** (`dateVerified: false`), and the reason
is almost always the same one: **vatican.va's published corpus has a hard edge
at roughly Pius XII.** Pius XI, who performed three of the six papal acts here,
is essentially absent from it. The flagged dates:

| Date | Event | Why flagged |
|---|---|---|
| 1531-12-09 | Guadalupe apparitions | traditional dates; the underlying documentary question is contested and this repo does not propose to close it |
| 1876-12-31 | Death of Catherine Labouré | secondary sources only |
| 1879-04-16 | Death of Bernadette Soubirous | secondary sources only |
| 1933-05-28 | Labouré beatified | no primary located; AAS vol. 25 cited **at volume level only** |
| 1947-07-27 | Labouré canonized | Pius XII's 28 July address confirms the canonization happened but does not date the rite |

The 1947 case is the one to read if you want to understand the standard: a
vatican.va URL was available and was **not** treated as verifying the date,
because the document is one day later and does not state it.

**Something the flags do not capture:** the 1830 and 1858 apparition dates are
marked `dateVerified: true` on the strength of the *custodian's* account — the
shrine describing its own site. That is a defensible standard, but it is a
weaker class of evidence than the papal homilies, and the boolean flag cannot
express the difference. Worth knowing before reading the flags as a quality
score.

## `saints/` — the folder-per-saint convention

`saints/<slug>/notes.md` holds each saint's **research trail**: the sources
consulted (including the ones that did not yield), the canonization-path dates
with their citations, and what remains unverified. Five folders, one per seed
saint. See `saints/README.md`.

Nothing in `saints/` is read by `build.js`. Adding or deleting a folder cannot
change a byte of `docs/`. This was deliberate for the bootstrap: it satisfies
the folder-per-saint instruction immediately without committing the repo to a
site architecture before that architecture is decided.

**Lúcia dos Santos has no folder**, and that omission is recorded rather than
silent: she is Venerable (decree of 22 June 2023), not canonized. She is in the
dataset as a figure and as a disambiguation entry precisely so that her absence
from `saints/` reads as a judgment rather than an oversight.

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
2. **The Labouré AAS lookups**, both of them. Highest-value verification work
   in the repo: AAS vol. 25 (1933) for the beatification, AAS vol. 39 (1947)
   for the canonization — the latter is not yet in `references[]` at all.
3. **The causes are missing.** Diocesan processes, introductions of causes,
   decrees on heroic virtues, decrees on miracles. The chronology currently
   jumps from death to beatification for every saint. Adding miracle decrees
   needs care: the dataset records that the Church *judged* a healing
   miraculous, never that a miracle occurred.
4. **The "youngest non-martyr saints" claim** (the Martos) is stated in the
   site's own voice in `facts` and again in the 2017 event text, but neither
   cited source states it. It is universally reported and probably true; it is
   still the weakest sentence in the dataset and should be attributed or
   softened.
5. **Jacinta Marto's birth date**, 5 vs 11 March 1910. Deliberately left open;
   the Fátima parish baptismal register would settle it.
6. **No `data/archives.json`.** No reference has a Wayback fallback yet. Run
   `scripts/archive-refs.js`; the shrine sites are the ones most likely to
   reorganize their URLs.
7. **Scope.** Should this repo hold *only* apparition seers, or all recently
   canonized saints? The current title and subtitle commit to apparition
   seers. Broadening is a title change, not just more rows.
8. **`AGENTS.md` is still the core template**, adapted only in its subject
   line. It describes `data/i18n/*.json` as machine-generated and not to be
   hand-edited; in this repo they are hand-authored and *are* the artifact to
   edit. Reconcile when the repo's own conventions have settled.

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

