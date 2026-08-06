# Bernadette Soubirous

Seer of the Lourdes apparitions (grotto of Massabielle, 1858). Sibling repo:
`cronologia/lourdes`.

## 1. Identity

| Form | Language / register | Where it comes from |
|---|---|---|
| Bernadette Soubirous | fr, canonical | `lourdes-beatification-centenary`, `lourdes-apparitions` |
| Marie-Bernarde Soubirous | civil/baptismal form | `wp-bernadette` — not primary-verified |
| Sœur Marie-Bernard | name in religion, Sisters of Charity of Nevers | `wp-bernadette` |
| Bernadeta / Bernadette de Lourdes | fr devotional | `lourdes-apparitions` |
| Santa Bernardita / Bernardita Soubirous | es — the standard Spanish form is **not** a transliteration of "Bernadette" | not yet sourced |
| Santa Bernardete / Bernadete Soubirous | pt | not yet sourced |
| Maria Bernarda Soubirous | la | not yet sourced |

Life dates as recorded: **7 January 1844 – 16 April 1879**. The birth date
rests on `wp-bernadette` alone.

## 2. Canonization path

| Step | Date | `dateVerified` | Declaring document |
|---|---|---|---|
| Reported apparitions | 11 Feb – 16 July 1858 (eighteen) | **true** | `lourdes-apparitions` — the sanctuary's own account |
| Apparitions declared worthy of belief | 1862, by **Bishop Bertrand-Sévère Laurence of Tarbes** | not a separate dataset event | `lourdes-apparitions` |
| Entered the Sisters of Charity of Nevers | 1866 | recorded in the death-event text | `wp-bernadette` |
| Death | **16 April 1879**, convent of Saint-Gildard, Nevers, aged 35 | **true** *(was false)* | `aas-05-1913` p. 436 — the decree introducing her cause gives "die 16 aprilis anni 1879, aetatis suae trigesimoquinto" |
| Introduction of the cause, signed by Pius X | **13 Aug 1913** | **true** | `aas-05-1913` p. 436. The Congregation resolved on 5 August that the Commission be signed "si Sanctissimo placuerit"; Pius X signed "die 13, eisdem mense et anno" |
| Heroic virtues — **Venerable** | **18 Nov 1923** | **false** — see below | `aas-15-1923` pp. 592–596 |
| Two miracles for the beatification | **1 May 1925** | **true** | `aas-17-1925` pp. 253–256. *De tuto* followed 2 June 1925 (p. 313) |
| Beatification by Pius XI | **14 June 1925**, Rome (St Peter's) | **true** | `aas-17-1925` pp. 296–301 — the apostolic letter, "sub anulo Piscatoris, die xiv mensis iunii anno MDCCCCXXV"; `lourdes-beatification-centenary` reproduces the declaration |
| Miracles for the canonization | **31 May 1933** | **true** | `aas-25-1933` p. 318. *De tuto* followed 2 July 1933 (p. 377) |
| Canonization by Pius XI | **8 December 1933**, St Peter's Basilica, on the feast of the Immaculate Conception | **true** | `aas-25-1933` (consistory acts) and `lourdes-beatification-centenary` |

The bootstrap's reading — that the sanctuary reproducing the 1925 declaration
was a materially better citation than a custodian summarising one — held up
exactly: the sanctuary's text and the *AAS* apostolic letter agree to the day.
What has changed is that the *AAS* volumes now carry the whole path, not just
the two papal rites. See `../catherine-laboure/notes.md` §3 for the method and
for why the bootstrap's "hard edge at Pius XII" was a claim about the wrong
tree.

### The 1923 decree dates itself two ways — the one flag left on her

`aas-15-1923` prints the heroic-virtues decree with a subscription reading
**`decimo nono calendas Decembres anno MDCCCCXXIII`** — a.d. XIX Kal. Dec.,
which is **13 November** 1923. The same decree's narrative says the pope chose
"hodiernam ... diem Dominicam XXVI post Pentecosten" — the twenty-sixth Sunday
after Pentecost, which in 1923 (Easter 1 April, Pentecost 20 May) fell on
**Sunday 18 November**. 13 November 1923 was a Tuesday. The volume's own
chronological index files the decree under **"nov. 31"**, a date that does not
exist.

The Roman-date arithmetic was checked against a control in the same family of
documents: the 1925 *de tuto* decree subscribes `quarto nonas iunias` (= 2 June)
and independently calls itself the third day after Pentecost, which in 1925
(Pentecost 31 May) is also 2 June. The method agrees with itself there, so the
1923 disagreement is in the printed text, not in the reading of it.

Secondary accounts give 18 November. The dataset carries **1923-11-18 with
`dateVerified: false`** and a `dateNote` setting out all three readings. This is
the case the repo exists for: a primary source contradicting itself is recorded,
not resolved.

## 3. Sources consulted

- **`lourdes-beatification-centenary`** — Sanctuary of Our Lady of Lourdes,
  *14th June 1925 – 14th June 2025: Centenary of the beatification of
  Bernadette Soubirous*. The load-bearing source for both papal dates.
  Official custodian record; reproduces the declaration.
- **`lourdes-apparitions`** — the sanctuary's account of the eighteen 1858
  apparitions, and of Bishop Laurence's 1862 judgment. Official but
  devotional; labeled as such.
- **`wp-bernadette`** — Wikipedia, for biographical dates pending primary
  verification. No longer load-bearing for the death date.
- **`aas-05-1913`, `aas-15-1923`, `aas-17-1925`, `aas-25-1933`** — *Acta
  Apostolicae Sedis*, cited to the page in every case. `aas-05-1913` is the most
  useful of the four: the decree introducing the cause opens with a compressed
  biography that gives her birth (7 January 1844), her entry into the Nevers
  novitiate (7 July), her profession dates and her death.

**Consulted and not used:** vatican.va's homilies and speeches trees, which hold
nothing for Pius XI — a fact about those trees, not about the site; the gazette
on the same host has everything. The Sisters of Charity of Nevers hold her body
and her convent archive at Saint-Gildard; **their site was probed and its
`/en/bernadette/` and `/en/le-sanctuaire/` paths 404 or 500**, so it remains
unconsulted and is still the obvious source for the religious-life dates.

## 4. What remains unverified

1. ~~Death, 16 April 1879~~ — **closed** against `aas-05-1913` p. 436.
2. **Birth, 7 January 1844**, at the Boly Mill in Lourdes — no longer Wikipedia
   only: the 1925 beatification letter gives "die VII mensis ianuarii anno
   MDCCCXXXXIV" and names her parents, François Soubirous and Louise Castérot
   (`aas-17-1925` p. 296). The place is still not in the dataset.
3. **The 1923 decree's self-contradiction** — the only flag left on her. A clean
   printing of *AAS* 15 p. 596, or the Congregation of Rites' own register,
   would say whether "decimo nono" is a typesetting error for "decimo quarto".
4. **Name in religion.** "Sister Marie-Bernard" is in the dataset's `figures`
   entry on the strength of `wp-bernadette` alone.
5. **The 1862 episcopal judgment.** Bishop Laurence's declaration is described
   inside the 1858 event text but has no event of its own and no citation
   beyond the sanctuary's summary. If the *mandement* text can be found it
   deserves both.
6. ~~AAS page-level citation for 8 December 1933~~ — **done**, along with the
   whole path.
7. **A frequent reader error worth keeping visible:** Bernadette is **not
   buried at Lourdes**. She died and lies at Saint-Gildard in Nevers. This is
   recorded in the dataset's `organizations` entry for the sanctuary
   deliberately, because it is the single most common confusion about her.
