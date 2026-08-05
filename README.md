# Cronologia — Santos

An open, source-referenced chronology of the **canonization paths of the seers
of the major Marian apparitions** (1531–2017): Juan Diego Cuauhtlatoatzin
(Guadalupe), Catherine Labouré (rue du Bac / the Miraculous Medal), Bernadette
Soubirous (Lourdes), and Francisco and Jacinta Marto (Fátima).

**Site:** <https://cronologia.github.io/santos/> · part of the
[Cronologia](https://cronologia.github.io/) project family.

## What this repo records — and what it does not

Sanctity and miracles are **Church judgments**. This dataset records *who
declared what, when, and in which document* — a pope's canonization homily, a
bishop's judgment that an apparition is worthy of belief, a decree on heroic
virtues. It does not assert that any apparition happened, and a canonization is
never presented as authenticating one. The two are separate ecclesiastical acts
and the site says so explicitly.

Where a papal act is published on vatican.va, that document is the citation.
Where it is not — Pius XI has essentially no presence there — the date is
flagged `dateVerified: false` and the `dateNote` names what would settle it.
**Five of sixteen event dates are currently flagged**, and the site renders a
`?` marker on each.

## Method

- `data/chronology.json` is the single source of truth; every fact and event
  carries `sources[]`; contested characterizations are attributed to their
  authors, never asserted in the site's own voice. See `AGENTS.md` for the
  operating rules and `context.md` for orientation.
- The build is a zero-dependency Node compiler from
  [cronologia/core](https://github.com/cronologia/core)'s template:
  ```
  node scripts/validate-data.js && node build.js && node --test
  ```
- English is authoritative. `es` and `pt` are pre-authored translation caches
  in `data/i18n/` baked in at build time, carrying a visible
  "machine-translated" disclaimer. Both are currently **hand-authored by an
  LLM and not yet human-reviewed** (`_meta.humanReviewed: false`).

## Repository map

```
data/chronology.json     SOURCE OF TRUTH — 16 events, 6 figures, 19 references
data/i18n/{es,pt}.json   Translation caches, 98/98 strings each
saints/<slug>/notes.md   Per-saint RESEARCH TRAIL — not built, not published
KEYWORDS.md              Name variants (pt/es/fr/la) and search traps
context.md               Orientation: what this is, current state, open questions
build.js                 Compiler: data/chronology.json -> docs/{en,es,pt}/
docs/                    COMPILED OUTPUT, served by GitHub Pages (committed)
```

`saints/` is a **research directory, not a build input**. It realizes the
folder-per-saint convention alongside the core template's single-page site;
whether it should also *generate* per-saint pages is an open design question
(see the design ticket on this repo). See `saints/README.md`.

## Status

Bootstrapped 2026-08-05. Live: the chronology in three locales, the four seer
apparitions and every beatification and canonization from 1925 to 2017, six
figures (including Lúcia dos Santos, who is **Venerable, not canonized**), four
disambiguation entries, and nineteen references — seven of them documents
published on vatican.va itself (five papal homilies or addresses, the official
canonization biography of Juan Diego, and one *Acta Apostolicae Sedis* volume).

Thin or open:

- **Catherine Labouré is the worst-sourced saint here.** Her 1933 beatification
  and 1947 canonization both rest on secondary sources; the route to fixing
  both runs through the *Acta Apostolicae Sedis* PDFs.
- The **causes themselves** — diocesan process, introduction of the cause,
  decrees on heroic virtues and on miracles — are almost entirely absent. The
  chronology jumps from death to beatification.
- No `data/archives.json` yet: no reference has a Wayback fallback.
- Per-saint page design undecided.

Corrections against primary sources are welcome via pull request.
