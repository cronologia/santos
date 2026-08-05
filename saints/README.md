# `saints/` — one folder per saint, for the research trail

This directory is **not** part of the build. Nothing in here is read by
`build.js`, and adding or deleting a folder cannot change a single byte of
`docs/`. The published site is compiled from `data/chronology.json` alone.

## What a folder is for

The dataset records *conclusions*: a dated event, its `sources[]`, a
`dateVerified` flag. It has no room for the trail that produced them — which
sources were consulted and rejected, why a date is flagged, what a future
contributor should try next. That trail is what lives here, one folder per
saint:

```
saints/<slug>/notes.md
```

Each `notes.md` carries the same four sections:

1. **Identity** — names and variants (the searchable forms live in
   `KEYWORDS.md`; here they are given with their language and source).
2. **Canonization path** — every step (death → cause opened → Venerable →
   Blessed → Saint) with its date, the reference id in
   `data/chronology.json#references`, and whether that date is verified
   against a primary document.
3. **Sources consulted** — including the ones that did *not* yield, so the
   next search does not repeat them.
4. **What remains unverified** — the open questions, stated as questions.

## Rules that apply here

The [sourcing rules](https://github.com/cronologia/core) apply to these notes
exactly as they apply to the dataset:

- **Sanctity and miracles are Church judgments, not facts asserted here.** A
  note records *who declared what, when, and in which document*. It never
  says an apparition happened; it says a named bishop declared it worthy of
  belief on a named date.
- **Flagged beats confident.** If a date rests on secondary sources, the note
  says so and names the primary document that would settle it.
- **A slug is not a claim.** The folder name is a filename.

## Who has a folder, and who does not

Five folders, for the five canonized seers of the four apparitions this repo
was seeded from:

| Folder | Apparition | Canonized |
|---|---|---|
| `juan-diego-cuauhtlatoatzin/` | Guadalupe, 1531 | 31 July 2002 |
| `catherine-laboure/` | Rue du Bac (Miraculous Medal), 1830 | 27 July 1947 |
| `bernadette-soubirous/` | Lourdes, 1858 | 8 December 1933 |
| `francisco-marto/` | Fátima, 1917 | 13 May 2017 |
| `jacinta-marto/` | Fátima, 1917 | 13 May 2017 |

**Lúcia dos Santos has no folder, and that omission is deliberate.** The third
Fátima seer is *Venerable* — Pope Francis authorized the decree on her heroic
virtues on 22 June 2023 — but she has been neither beatified nor canonized.
`saints/` means canonized. She is in the dataset (as a figure and as a
disambiguation entry) precisely so that her absence from this directory is not
read as an oversight. If her cause advances, she gets a folder then.

## Relationship to the site

Whether these folders should also *generate* per-saint pages under
`docs/<lang>/saints/<slug>.html` — the way `cronologia/olavo` generates
`docs/<lang>/philosophers/<slug>.html` — is **undecided**. See the design
ticket on this repo. Until that is decided, `saints/` is research only and the
site stays single-page.
