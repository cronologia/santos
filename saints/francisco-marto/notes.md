# Francisco Marto

The elder of the two canonized Fátima seers. Sibling repo: `cronologia/fatima`.
His cause and Jacinta's ran together at every step, so this file and
`../jacinta-marto/notes.md` share their canonization-path citations.

## 1. Identity

| Form | Language / register | Where it comes from |
|---|---|---|
| Francisco Marto | pt, canonical | `fatima-francisco-birth`, `vat-marto-canonization-2017` |
| Francisco de Jesus Marto | full form | `wp-marto` — not primary-verified |
| São Francisco Marto | pt | `fatima-francisco-birth` (the shrine's EN pages render "Saint Francisco Marto") |
| San Francisco Marto | es | not yet sourced |
| Franciscus Marto | la | not yet sourced |
| "the shepherd children" / *os pastorinhos* / *los pastorcitos* | collective term for Francisco, Jacinta and Lúcia | `fatima-apparitions` |

Life dates as recorded: **11 June 1908 – 4 April 1919**. Both from the Shrine
of Fátima's own notice — unusually, the best-sourced life dates in the repo.

## 2. Canonization path

| Step | Date | `dateVerified` | Declaring document |
|---|---|---|---|
| Birth, Aljustrel | 11 June 1908 | recorded in `figures`, not a dataset event | `fatima-francisco-birth` |
| Reported apparitions | six, 13 May – 13 Oct 1917, Cova da Iria | **true** | `fatima-apparitions` |
| Apparitions declared worthy of belief | 13 Oct 1930, by the **bishop of Leiria** | not a separate dataset event | `fatima-apparitions`, `vat-marto-beatification-2000` |
| Death, Aljustrel, aged 10 (influenza pandemic) | **4 April 1919** | **true** | `fatima-francisco-birth` — the shrine's biographical notice gives both birth and death |
| Beatification by John Paul II | **13 May 2000**, Shrine of Fátima | **true** | `vat-marto-beatification-2000` — the beatification homily on vatican.va ("two candles which God lit") |
| Canonization by Pope Francis | **13 May 2017**, Shrine of Fátima, on the centenary of the first apparition | **true** | `vat-marto-canonization-2017` — the canonization homily on vatican.va |

Every date in this table is verified. Francisco was the cleanest case in the
dataset at bootstrap: a twentieth-century cause, a living shrine that publishes
its own biographical record, and two papal homilies on vatican.va. It is now
also the most *complete*, because the Dicastery for the Causes of Saints
publishes its own account of the cause.

Both papal dates fall on **13 May**, the anniversary of the first apparition —
deliberately, in both cases. The 2017 canonization was timed to the centenary.
So was the 1989 heroic-virtues decree, which the bootstrap did not carry.

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


## 3. Sources consulted

- **`vat-marto-canonization-2017`** — vatican.va, homily of Pope Francis at
  the rite of canonization, Fátima, 13 May 2017 (EN). Primary.
- **`vat-marto-beatification-2000`** — vatican.va, homily of John Paul II at
  the beatification, Fátima, 13 May 2000 (EN). Primary.
- **`fatima-francisco-birth`** — Shrine of Fátima, *Saint Francisco Marto was
  born 110 years ago*. Official custodian record, devotional perspective;
  labeled as such. Gives 11 June 1908 and 4 April 1919.
- **`fatima-apparitions`** — the shrine's *Narrative of the Apparitions*, for
  the 1917 series and the 1930 episcopal judgment.
- **`wp-marto`** — Wikipedia, cross-checking and the "youngest non-martyrs"
  claim.
- **`ccs-marto`** — the Dicastery for the Causes of Saints' own page on the two.
  The load-bearing source for every step between 1952 and 1999, and the one that
  establishes that neither miracle decree names its beneficiary.
- **`press-marto-2017`**, **`ccs-decrees-2017`** — the Holy See press bulletin
  of 23 March 2017 and the dicastery's register of decrees promulgated that
  year. Both quote the decree item verbatim.

**Consulted and not used:** *AAS* vol. 91 (1999) was downloaded and searched for
"Marto" and returns nothing — the Congregation's decrees of that period are not
printed in the gazette the way the pre-conciliar ones are, which is why the
dicastery's own site is the right source here and the gazette is the right
source for Labouré and Soubirous. `papa2017.fatima.pt` was read and **not used
for the beneficiary's name** (see §2).

## 4. What remains unverified

1. **The "youngest non-martyr saints" claim.** The dataset states it in
   `facts` and again in the 2017 event text, citing
   `vat-marto-canonization-2017` and `wp-marto`. It is universally reported —
   but it is a claim about the *whole* canonization record, and neither cited
   source states it as such. It should either be attributed to whoever first
   made it (Holy See press office statements around May 2017 are the likely
   origin) or softened. **This is the weakest sentence in the dataset.**
2. **The 1930 episcopal judgment.** The bishop of Leiria is not named and the
   *providência* document is not cited beyond the shrine's summary. It has no
   event of its own.
3. ~~The miracle attributed to their intercession~~ — **added**, as two
   recognition acts (1999 and 2017), worded as judgments and naming nobody.
4. ~~Cause-opening dates~~ — **added.** The bootstrap could not locate a citable
   document; `causesanti.va` is that document, and it also supplies the 1989
   heroic-virtues decree the bootstrap did not know it was missing.
5. **The subjects of the two recognised cures.** Deliberately absent, and they
   should stay absent unless a dicastery text names them. If the *Positio* or a
   published decree ever does, that is the source to cite — not the press.
6. **The 1930 bishop of Leiria** is still unnamed in the dataset, though
   `ccs-marto` names José Alves Correia da Silva as the bishop who opened the
   1952 process; he is the same man who issued the 1930 *providência*, which is
   worth stating once it can be cited to that document rather than inferred.
5. **Name forms in es/la** — unsourced. See `KEYWORDS.md`.
