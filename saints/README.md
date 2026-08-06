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

Six folders, for the five canonized seers this repo was seeded from and for the
one seer whose cause this dataset now tracks:

| Folder | Apparition | Status |
|---|---|---|
| `juan-diego-cuauhtlatoatzin/` | Guadalupe, 1531 | canonized 31 July 2002 |
| `catherine-laboure/` | Rue du Bac (Miraculous Medal), 1830 | canonized 27 July 1947 |
| `bernadette-soubirous/` | Lourdes, 1858 | canonized 8 December 1933 |
| `francisco-marto/` | Fátima, 1917 | canonized 13 May 2017 |
| `jacinta-marto/` | Fátima, 1917 | canonized 13 May 2017 |
| `lucia-dos-santos/` | Fátima, 1917 | **Venerable, 22 June 2023 — not beatified, not canonized** |

### The rule changed, and here is why

The bootstrap's rule was **`saints/` means canonized**, and Lúcia dos Santos'
absence was recorded as a judgment rather than left silent: "She is in the
dataset (as a figure and as a disambiguation entry) precisely so that her
absence from this directory is not read as an oversight. If her cause advances,
she gets a folder then."

Her cause has not advanced past Venerable. The folder is here anyway, because
the pass that added the causes to the chronology showed the old rule was
answering the wrong question.

What this directory holds is a **research trail** — sources consulted and
rejected, why a date is flagged, what to try next. That trail is produced by
*working a cause*, not by a cause finishing. Lúcia's is now the same size and
the same kind as the other five: the Carmel of Coimbra's postulation record, a
403 from Vatican News, a 404 on the site's English tree, a negative *AAS*
search, the derogation quoted but not primary-cited. Keeping the old rule would
have meant that the one cause still running is the one cause whose trail has
nowhere to live — which reproduces, at the notes level, exactly the
understatement that adding her acts to the chronology was meant to fix.

So the rule is now: **`saints/<slug>/` is a research trail for a cause this
dataset tracks.** A folder is not a claim of sanctity, and the README's older
principle already said as much — *a slug is not a claim; the folder name is a
filename.* The status column above carries the claim, the folder does not, and
`lucia-dos-santos/notes.md` opens by saying in its first line that she is not a
canonized saint.

Two consequences worth stating so they are not rediscovered:

- **This does not widen scope.** The roster is still the seers of the four
  seeded apparitions. A folder is added when this repo works someone's cause,
  not when someone is proposed for one.
- **If her cause is ever closed without beatification**, the folder stays and
  the status column says so. A trail of work done does not stop existing
  because the work led nowhere; that is the whole point of recording the
  sources that did not yield.

## Relationship to the site

Whether these folders should also *generate* per-saint pages under
`docs/<lang>/saints/<slug>.html` — the way `cronologia/olavo` generates
`docs/<lang>/philosophers/<slug>.html` — is **undecided**. See the design
ticket on this repo. Until that is decided, `saints/` is research only and the
site stays single-page.
