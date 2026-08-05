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

### The birth-date disagreement

This is the one place in the dataset where two sources are in open conflict and
the dataset **declines to resolve it**. The Shrine of Fátima — the custodian,
publishing its own record — gives **5 March 1910**, with baptism on 19 March.
Older devotional literature widely gives **11 March 1910**. The `figures` entry
records the shrine's date *and names the disagreement inline*; a `disambiguation`
item states it again for readers who never look at the figure list.

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
- **`wp-marto`** — Wikipedia; the source for the existence of the 11 March
  variant.

**Consulted and not used:** the Fátima parish register (not accessed); *AAS*
(not needed, the homilies are better).

## 4. What remains unverified

1. **Birth date: 5 or 11 March 1910.** See above. Open, and deliberately left
   open.
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
5. **Cause-opening dates** — absent, as for Francisco.
6. **Name forms in es/la** — unsourced. See `KEYWORDS.md`.
