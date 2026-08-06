# Lúcia dos Santos

**Not a canonized saint.** She is *Venerable* — the decree on her heroic virtues
was authorised on 22 June 2023 — and has been neither beatified nor canonized.
This folder exists because the directory holds **research trails for the causes
this dataset tracks**, and hers is now tracked; it is not a claim about her
status. See `../README.md` for why the bootstrap's rule changed and what it
changed to.

The third and eldest Fátima seer. Sibling repo: `cronologia/fatima`; her fellow
seers are `../francisco-marto/` and `../jacinta-marto/`.

## 1. Identity

| Form | Language / register | Where it comes from |
|---|---|---|
| Lúcia de Jesus e do Coração Imaculado | pt, name in religion — the form the dicastery uses | `ccs-decrees-2023`, `press-lucia-2023` |
| Lúcia dos Santos | pt, "al secolo" / in the world | `ccs-decrees-2023` |
| Lúcia de Jesus Rosa dos Santos | full civil form | `wp-marto` — not primary-verified |
| Irmã Lúcia | pt, the form the Carmel of Coimbra uses throughout | `lucia-causa` |
| Sor Lucía de Jesús y del Corazón Inmaculado | es | not yet sourced; the dataset's Spanish uses this form for the religious name and keeps *Lúcia dos Santos* as the proper name |
| Sister Lucia | en, common form | `vaticannews-lucia-venerable` |

Life dates as recorded: **28 March 1907 – 13 February 2005**, both as the
Dicastery for the Causes of Saints states them ("nata ad Aljustrel … il 28 marzo
1907 e morta a Coimbra … il 13 febbraio 2005"). These are the best-sourced life
dates of any figure in the dataset — a dicastery decree register, not a
custodian and not an encyclopedia.

## 2. The cause

| Step | Date | `dateVerified` | Declaring document |
|---|---|---|---|
| Death, Carmel of Saint Teresa, Coimbra | **13 Feb 2005** | **true** | `ccs-decrees-2023`, `lucia-causa` |
| Benedict XVI derogates the five-year interval | **13 Feb 2008** | recorded in the 2008 event text | `lucia-causa` — quotes the decision, citing art. 9 of the *Normae servandae*, on the petition of Bishop Albino Mamede Cleto; read out at the Carmel by Cardinal José Saraiva Martins |
| Diocesan inquiry opened by Bishop Albino Cleto | **30 Apr 2008** | **true** | `lucia-causa` |
| Historical commission sworn in | 23 June 2009 | not a dataset event | `lucia-causa` |
| Diocesan inquiry closed | **13 Feb 2017** | recorded in the 2008 event text | `lucia-causa` — 61 witnesses, 15,483 pages, 19 boxes |
| *Positio super vita, virtutibus et fama sanctitatis* delivered | **13 Oct 2022** | recorded in the 2023 event text | `lucia-causa` |
| Theological consultors' congress | 9 Mar 2023 | recorded in the 2023 event text | `lucia-causa` |
| Ordinary session | 6 June 2023 | recorded in the 2023 event text | `lucia-causa` |
| Heroic virtues — **Venerable** | **22 June 2023** | **true** | `ccs-decrees-2023`, `press-lucia-2023`, `vaticannews-lucia-venerable` |
| Beatification | — | — | **requires a recognised miracle. None has been decreed.** |
| Canonization | — | — | **requires a second. None has been decreed.** |

Three of her dates fall on **13 February** — her death, the derogation on its
third anniversary, and the closing session on its twelfth. That is deliberate on
the diocese's part and worth not mistaking for a transcription error.

**Why her path is short and the others' are long.** She died in 2005, under
*Divinus perfectionis Magister* (1983): one diocesan inquiry conducted by the
bishop, a *Positio* under a relator, then the Roman phase. Labouré's cause ran
under the Congregation of Rites through ordinary processes, an apostolic
process, and separate congregations *antepraeparatoria*, *praeparatoria* and
*generalis* for each question. The two are not the same procedure and their
durations are not comparable — the same point the `disambiguation` entry makes
about Juan Diego.

## 3. Sources consulted

- **`lucia-causa`** — `lucia.pt/historia-da-causa/`, the postulation's own
  year-by-year record, published by the Carmel of Saint Teresa in Coimbra where
  she lived from 1948 and died. Official custodian record, devotional
  perspective, labeled as such in `publisherNote`. It is unusually good for a
  custodian source: it quotes the derogation decision, names every postulator,
  vice-postulator and tribunal officer, and gives the page and witness counts of
  the diocesan inquiry. Load-bearing for 2008 and for the 2022 *Positio*.
- **`ccs-decrees-2023`** — the Dicastery for the Causes of Saints' own register
  of decrees promulgated in 2023. Gives the 22 June date, the form of her name
  in religion, and her birth and death dates.
- **`press-lucia-2023`** — the Holy See press bulletin of 22 June 2023,
  recording the audience with Cardinal Marcello Semeraro at which the Pope
  authorised the promulgation.
- **`vaticannews-lucia-venerable`** — carried over from the bootstrap, where it
  was the only source for the decree. It is now the weakest of the three and is
  cited alongside them rather than alone.

**Consulted and did not yield:** `vaticannews.va` returns **403** to this
environment's fetcher, so the bootstrap's own citation could not be re-read and
was corroborated from the dicastery register and the bulletin instead — which is
the better outcome anyway. `lucia.pt/en/history-of-the-cause/` **404s**; the site
is Portuguese-only in practice. *AAS* was not searched: the Congregation's
decrees of this period are not printed in the gazette (the same negative result
recorded for the Martos in `../francisco-marto/notes.md` §3).

## 4. What remains unverified

1. **The decree text itself.** Everything here rests on the *register* of
   decrees and the *bulletin announcing the audience*, not on the promulgated
   decree as published. That is the same evidence class as the Marto 2017 entry
   and is honest, but it is one step short of the Labouré and Soubirous acts,
   which are cited to the printed decree.
2. **The 13 February 2008 derogation** is quoted by the Carmel but not cited to
   a Holy See document. A press bulletin for that date, if one exists, would
   upgrade it.
3. **Birth at Aljustrel, 28 March 1907** — dicastery-sourced and therefore solid,
   but it is not a dataset event and the birthplace is not in `figures`.
4. **The two possible miracles** mentioned by the postulator in 2013
   (`lucia-causa`) are **deliberately absent** from the dataset. A postulator
   saying cases will be studied is not a recognition act, and there is nothing
   datable in it. If a decree is ever promulgated, that is the event.
5. **Spanish and Latin name forms** — unsourced. See `KEYWORDS.md`.
