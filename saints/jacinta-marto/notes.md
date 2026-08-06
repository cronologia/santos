# Jacinta Marto

The younger of the two canonized Fátima seers, and the youngest non-martyr
canonized by the Catholic Church. Sibling repo: `cronologia/fatima`. Her cause
ran with Francisco's at every step — see `../francisco-marto/notes.md` for the
shared citations.

## 1. Identity

| Form | Language / register | Where it comes from |
|---|---|---|
| Jacinta Marto | pt, canonical | `vaticanstate-jacinta`, `vat-marto-canonization-2017` |
| Jacinta de Jesus Marto | full form | `wp-marto` — not primary-verified |
| Santa Jacinta Marto | pt | `vaticanstate-jacinta` (EN pages render "Saint Jacinta Marto") |
| Santa Jacinta Marto | es | not yet sourced (the form is identical, which is itself worth knowing for search) |
| Jacintha Marto | la | not yet sourced |
| "the shepherd children" / *os pastorinhos* | collective term | `fatima-apparitions` |

## 2. Canonization path

| Step | Date | `dateVerified` | Declaring document |
|---|---|---|---|
| Birth, Aljustrel | **5 March 1910** per the Shrine of Fátima (baptism 19 March); **11 March** in older devotional literature | recorded in `figures` **with the disagreement preserved** | `fatima-jacinta-birth` vs `wp-marto` |
| Reported apparitions | six, 13 May – 13 Oct 1917, Cova da Iria | **true** | `fatima-apparitions` |
| Apparitions declared worthy of belief | 13 Oct 1930, by the bishop of Leiria | not a separate dataset event | `fatima-apparitions` |
| Death, Dona Estefânia hospital, Lisbon, aged 9 (purulent pleurisy following influenza, after surgery) | **20 February 1920** | **true** | `vaticanstate-jacinta` — Vatican City State's saint-of-the-day notice for her 20 February memorial |
| Beatification by John Paul II | **13 May 2000**, Shrine of Fátima | **true** | `vat-marto-beatification-2000` |
| Canonization by Pope Francis | **13 May 2017**, Shrine of Fátima | **true** | `vat-marto-canonization-2017` |


### The cause, step by step (shared with `../jacinta-marto/notes.md`)

| Step | Date | `dateVerified` | Declaring document |
|---|---|---|---|
| Informative processes opened at Leiria by **Bishop José Alves Correia da Silva** | **30 Apr 1952** | **true** | `ccs-marto` |
| Diocesan phase closed | Jacinta 2 June 1979; Francisco 1 Aug 1979 | recorded in the 1952 event text | `ccs-marto` |
| Heroic virtues — **Venerable** | **13 May 1989** | **true** | `ccs-marto` |
| Miracle for the beatification | **28 June 1999** | **true** | `ccs-marto` |
| Beatification by John Paul II | **13 May 2000** | **true** | `vat-marto-beatification-2000` |
| Cardinals and bishops judge the second case a true miracle | 21 Mar 2017 | recorded in the 2017 event text | `ccs-marto` |
| Miracle for the canonization, authorised by Francis | **23 Mar 2017** | **true** | `press-marto-2017`, `ccs-decrees-2017` |
| Canonization by Pope Francis | **13 May 2017** | **true** | `vat-marto-canonization-2017` |

**21 vs 23 March 2017 is not a disagreement.** The dicastery's own biography
gives 21 March for the *Ordinary Session of Cardinals and Bishops* that judged
the case; the press bulletin and the decree register give 23 March for the
*audience at which the Pope authorised promulgation*. Two acts, two dates. The
dataset records the 23 March promulgation as the event and mentions the
21 March session in its text, because promulgation is the act with the document.

### The two miracle decrees name nobody, and the dataset follows them

This is the rule that governed the whole pass, and the Marto decrees are the
case that makes it bite.

- **28 June 1999** (beatification). `ccs-marto` describes "prodigiosa guarigione
  di una donna da *paraplegia da probabile mielite trasversa, della durata di
  circa 22 anni*". No name. The Shrine of Fátima's 2017 news page names
  "Emilia Santos"; that is a **shrine attribution, not the decree**, and the
  dataset does not carry it.
- **23 March 2017** (canonization). The Holy See press bulletin reads: "il
  miracolo, attribuito all'intercessione del Beato Francesco Marto, nato l'11
  giugno 1908 e morto il 4 aprile 1919, e della Beata Giacinta Marto, nata l'11
  marzo 1910 e morta il 20 febbraio 1920, fanciulli di Fátima". The **beati are
  named; the beneficiary is not.** `ccs-marto` adds only "guarigione miracolosa
  di un bambino da «trauma cranio-encefalico grave»" at Campo Mourão in 2013.
  Press accounts name a Brazilian child; the dataset does not.

Contrast `../juan-diego-cuauhtlatoatzin/notes.md`, where the 2001 decree does
name its subject and the dataset therefore does too. **What the dataset says
about a beneficiary is a function of what the decree says, not of what is
knowable.**

### The birth-date disagreement

This is the one place in the dataset where two sources are in open conflict and
the dataset **declines to resolve it** — and this pass has made the conflict
sharper, not softer. The Shrine of Fátima — the custodian, publishing its own
record — gives **5 March 1910**, with baptism on 19 March. Older devotional
literature widely gives **11 March 1910**.

**So does the Holy See.** The press bulletin of 23 March 2017 and the
dicastery's register of decrees for that year both describe her as "nata l'11
marzo 1910", and `ccs-marto` repeats it. The 11 March date is therefore not
merely "older devotional literature": it is the date in the Church's own act of
canonization. The shrine and the dicastery disagree, and the two are both
official. The `figures` entry records the shrine's date *and names the
disagreement inline*; a `disambiguation` item states it again, now naming the
Holy See as the other party.

The correct next step is the **Fátima parish baptismal register**, which has
not been consulted. Note that a baptism date of 19 March is compatible with
either birth date and does not by itself decide the question.

Neither date is a dataset *event*, so neither carries a `dateVerified` flag —
which is why the disagreement is carried in prose instead. If a birth event is
ever added, it must be added flagged.

## 3. Sources consulted

- **`vat-marto-canonization-2017`** and **`vat-marto-beatification-2000`** —
  vatican.va homilies. Primary. Shared with Francisco.
- **`vaticanstate-jacinta`** — vaticanstate.va, *20 February: Saint Jacinta
  Marto — Saint of the day*. Official but summary-level; it establishes the
  liturgical memorial and the death date, not much more.
- **`fatima-jacinta-birth`** — Shrine of Fátima, *Today marks the anniversary
  of Saint Jacinta Marto's birth*. Official custodian record, devotional
  perspective. The source of the 5 March 1910 date.
- **`fatima-apparitions`** — the shrine's narrative of the 1917 apparitions.
- **`wp-marto`** — Wikipedia; no longer the only source for the 11 March
  variant, which the Holy See's own decree register carries.
- **`ccs-marto`**, **`ccs-decrees-2017`**, **`press-marto-2017`** — see
  `../francisco-marto/notes.md` §3.

**Consulted and not used:** the Fátima parish register (still not accessed);
*AAS* vol. 91 (1999), searched for "Marto" with no result.

## 4. What remains unverified

1. **Birth date: 5 or 11 March 1910.** See above. Open, deliberately left open,
   and now a disagreement between two *official* sources rather than between a
   custodian and devotional literature. The Fátima parish baptismal register
   remains the thing that would settle it.
2. **The "youngest non-martyr saint" claim** — it attaches most strongly to
   Jacinta, who was the younger. Same weakness as flagged in
   `../francisco-marto/notes.md` §4.1: universally reported, not stated by
   either cited source.
3. **The 1919 Lisbon hospital sequence.** She was moved from Aljustrel to
   Ourém and then to Lisbon; the dataset records only the death at Dona
   Estefânia. The intermediate stages are not sourced and not included.
4. **The 1935 and 1951 exhumations/translations of her remains** to the
   Fátima basilica are commonly reported and are **absent from the dataset**;
   no citable document was located.
5. ~~Cause-opening dates~~ — **added**, as for Francisco. Note that her
   diocesan phase closed on **2 June 1979** per `ccs-marto`, where
   `papa2017.fatima.pt` says 2 July; the dataset follows the dicastery.
6. **Name forms in es/la** — unsourced. See `KEYWORDS.md`.
