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
| Death | **16 April 1879**, convent of Saint-Gildard, Nevers, aged 35 | **false** | secondary only |
| Beatification by Pius XI | **14 June 1925**, Rome (St Peter's) | **true** | `lourdes-beatification-centenary` — the sanctuary's 2025 centenary notice **reproduces the beatification declaration** |
| Canonization by Pius XI | **8 December 1933**, St Peter's Basilica, on the feast of the Immaculate Conception | **true** | `lourdes-beatification-centenary`, cross-checked against `wp-bernadette`; `aas-25-1933` cited at volume level |

Why the two papal dates are verified while Labouré's are not: the Sanctuary of
Lourdes published a centenary notice in 2025 that **reproduces the 1925
declaration text**, and confirms the 1933 canonization. That is a custodian
publishing a primary document, which is a materially better citation than a
custodian summarising one. There is still no vatican.va source — Pius XI's acts
are not in the published corpus — so `aas-25-1933` rides along as a volume-level
pointer for the 1933 act.

## 3. Sources consulted

- **`lourdes-beatification-centenary`** — Sanctuary of Our Lady of Lourdes,
  *14th June 1925 – 14th June 2025: Centenary of the beatification of
  Bernadette Soubirous*. The load-bearing source for both papal dates.
  Official custodian record; reproduces the declaration.
- **`lourdes-apparitions`** — the sanctuary's account of the eighteen 1858
  apparitions, and of Bishop Laurence's 1862 judgment. Official but
  devotional; labeled as such.
- **`wp-bernadette`** — Wikipedia, for biographical dates pending primary
  verification.
- **`aas-25-1933`** — *AAS* vol. 25 (1933), volume-level pointer; shared with
  the Labouré beatification, which falls in the same volume year.

**Consulted and not used:** vatican.va, which holds nothing for Pius XI. The
Sisters of Charity of Nevers hold her body and her convent archive at
Saint-Gildard; **their site has not been consulted** and is the obvious next
source for the death date and the religious-life dates.

## 4. What remains unverified

1. **Death, 16 April 1879** — `dateVerified: false`. The Saint-Gildard
   community's own record, or a Nevers civil register, would settle it.
2. **Birth, 7 January 1844**, at the Boly Mill in Lourdes — Wikipedia only;
   the place is not in the dataset.
3. **Name in religion.** "Sister Marie-Bernard" is in the dataset's `figures`
   entry on the strength of `wp-bernadette` alone.
4. **The 1862 episcopal judgment.** Bishop Laurence's declaration is described
   inside the 1858 event text but has no event of its own and no citation
   beyond the sanctuary's summary. If the *mandement* text can be found it
   deserves both.
5. **AAS page-level citation for 8 December 1933** — the date is already
   verified by another route, so this is a durability improvement rather than
   a flag to clear.
6. **A frequent reader error worth keeping visible:** Bernadette is **not
   buried at Lourdes**. She died and lies at Saint-Gildard in Nevers. This is
   recorded in the dataset's `organizations` entry for the sanctuary
   deliberately, because it is the single most common confusion about her.
