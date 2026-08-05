# Catherine Labouré

Seer of the rue du Bac apparitions (Paris, 1830), from which the Miraculous
Medal derives. The **worst-sourced saint in this dataset** — two of her four
dates are flagged, and both flags are for the same underlying reason: the acts
of Pius XI and Pius XII are not published on vatican.va.

## 1. Identity

| Form | Language / register | Where it comes from |
|---|---|---|
| Catherine Labouré | fr, canonical | `medaille-chapelle`, `vat-laboure-1947` |
| Zoé Labouré | baptismal name, before religious life | `wp-laboure` — not primary-verified |
| Sainte Catherine Labouré | fr | `vat-laboure-1947` (French text) |
| Santa Catalina Labouré | es | not yet sourced |
| Santa Catarina Labouré | pt | not yet sourced |
| Catharina Labouré | la | not yet sourced — the AAS form, if located, would settle this |

Life dates as recorded: **2 May 1806 – 31 December 1876**. The birth date rests
on `wp-laboure` alone.

## 2. Canonization path

| Step | Date | `dateVerified` | Declaring document |
|---|---|---|---|
| Reported apparitions | night of 18–19 July 1830; again 27 Nov 1830 | **true** | `medaille-chapelle` — the Vincentian association's own account, dating both |
| Miraculous Medal struck | 1832 | n/a (recorded inside the 1830 event text) | `medaille-chapelle` |
| Death | **31 Dec 1876**, hospice of Enghien, Paris | **false** | secondary only (`wp-laboure`, `medaille-chapelle`) |
| Beatification by Pius XI | **28 May 1933**, Rome | **false** | no primary located. `aas-25-1933` is cited **at volume level only** |
| Canonization by Pius XII | **27 July 1947**, St Peter's Basilica | **false** | `vat-laboure-1947` confirms the canonization *had happened* but does not date the rite |

The 1947 entry is worth reading closely as a worked example of the discipline.
Pius XII's address of **28 July 1947** to the canonization pilgrims in the
Court of Saint Damasus *is* on vatican.va (in French), and it praises the newly
canonized "saint of silence". That establishes beyond doubt that the
canonization had just occurred. It does **not** state the date of the rite. So
the event carries the 27 July date from secondary sources with
`dateVerified: false`, and the `dateNote` says exactly why. A weaker project
would have marked it verified on the strength of a vatican.va URL.

## 3. Sources consulted

- **`vat-laboure-1947`** — vatican.va, Pius XII, *Aux pèlerins réunis à Rome
  pour la canonisation de sainte Catherine Labouré*, 28 July 1947. **French
  only.** The single primary document available for her canonization, and it
  is one day off the date it is being used to support.
- **`aas-25-1933`** — *Acta Apostolicae Sedis*, vol. 25 (1933), the scanned
  OCR'd PDF on vatican.va. Cited as a **volume-level pointer**. The specific
  acta for the Labouré beatification have not been located inside it.
- **`medaille-chapelle`** — Association de la Médaille Miraculeuse (French),
  the custodian of 140 rue du Bac. Official but devotional; labeled as such in
  `publisherNote`. Dates both 1830 apparitions and is the source for the
  chapel as her resting place.
- **`wp-laboure`** — Wikipedia. Carrying more weight here than anywhere else
  in the dataset, which is itself the finding.

**Consulted and not used:** vatican.va has **no Pius XI holdings** for 1933 in
the homilies/speeches trees — his pontificate predates the corpus the site
publishes. This is why every Pius XI date in this repo (Labouré 1933,
Soubirous 1925 and 1933) had to be sourced elsewhere; Soubirous got lucky in
having a sanctuary that reproduced the declaration, Labouré did not.

## 4. What remains unverified

1. **Beatification, 28 May 1933** — the highest-value open item in the repo.
   The route is the *Acta Apostolicae Sedis* vol. 25 (1933) PDF: find the
   decree or the *Litterae Apostolicae*, get a page number, and the flag can
   be cleared. The volume is already cited; only the page-level lookup is
   missing.
2. **Canonization, 27 July 1947** — same route, *AAS* vol. 39 (1947), which is
   **not yet in `references[]` at all**. Adding it (even at volume level) and
   then locating the act would clear this flag.
3. **Death, 31 Dec 1876** — no primary attempted. A Daughters of Charity
   necrology or a Paris civil register would settle it.
4. **Birth, 2 May 1806**, at Fain-lès-Moutiers (Côte-d'Or) — the place is not
   even in the dataset. Wikipedia only.
5. **The 1830 apparition dates** are marked verified on the strength of the
   *custodian's* account, not an independent one. That is a defensible
   standard for what a shrine says about its own chapel, but it is a weaker
   verification than the papal-homily class used elsewhere, and a reader
   should know the difference.
6. **Name forms in es/pt/la** — all unsourced. See `KEYWORDS.md`.
