# Catherine Labouré

Seer of the rue du Bac apparitions (Paris, 1830), from which the Miraculous
Medal derives. She was the **worst-sourced saint in this dataset** at bootstrap
— two of her four dates were flagged, both because the acts of Pius XI and
Pius XII are absent from the vatican.va homilies and speeches trees. She is now
the **best-sourced**, and by a wide margin: every step of her cause is anchored
on the *Acta Apostolicae Sedis* volume that printed it. The bootstrap's
conclusion that "vatican.va has no Pius XI holdings" was true of the corpus it
searched and wrong about the Holy See's publishing: **AAS is on vatican.va, back
to 1909, as scanned PDFs with an OCR text layer**, and it prints the decrees
themselves. That is the single most useful finding of this pass, and it applies
to Soubirous and Juan Diego too.

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
| Death | **31 Dec 1876**, hospice of Enghien, Paris | **true** *(was false)* | `aas-25-1933` p. 161 — the decree states she died "die 31 Decembris mensis anno 1876"; `aas-39-1947` p. 378 — the canonization formula fixes her feast on her *dies natalis*, 31 December |
| Introduction of the cause, signed by Pius X | **12 Dec 1907**, Rome | **true** | `aas-25-1933` pp. 369–370 (the beatification letter recites it); `aas-39-1947` p. 37 dates the introduction to 1907 and names Pius X |
| Heroic virtues — **Venerable** | **19 July 1931** | **true** | `aas-23-1931` pp. 381–384, decree of the Sacred Congregation of Rites, Card. Laurenti *Praefectus*, Carinci *Secretarius* |
| Two miracles for the beatification | **13 Feb 1933** | **true** | `aas-25-1933` p. 161. *De tuto* followed 12 March 1933 (p. 217) |
| Beatification by Pius XI | **28 May 1933**, Rome | **true** *(was false)* | `aas-25-1933` pp. 367–371 — the apostolic letter *Horti conclusi*, "sub anulo Piscatoris, die xxviii mensis Maii, anno MDCCCCXXXIII" |
| Cause resumed for canonization | 1936 | not a dataset event | `aas-39-1947` p. 37 |
| Two further miracles for the canonization | **26 May 1946** | **true** | `aas-38-1946` pp. 443–445. *De tuto* followed 8 Dec 1946 (`aas-39-1947` pp. 37–38) |
| Canonization by Pius XII | **27 July 1947**, St Peter's Basilica | **true** *(was false)* | `aas-39-1947` pp. 377–378, which head the acts "in sollemni canonizatione Beatae Catharinae Labouré, virginis, die XXVII mensis Iulii anno MCMXLVII in Vaticana Basilica habita"; the volume's diary indexes the rite under 27 July (p. 414) |

**All three of her flags are cleared, and by the same route.** The bootstrap's
worked example — that Pius XII's address of 28 July 1947 confirms the
canonization without dating the rite, so the event stayed flagged — was right
to refuse the weak citation. It was simply looking in the wrong tree. The
answer was four clicks away in the gazette, and the discipline that kept the
flag on is what made it worth going to look.

### The two miracle decrees, and how they are worded

Both name their subjects, which is why the dataset can say so:

- **13 February 1933** (beatification): "Constare de duobus miraculis, Venerabili
  Catharina Labouré intercedente, a Deo patratis" — followed by two named
  instantaneous and complete recoveries, one from acute diffuse purulent
  peritonitis, one a boy's from Pott's disease of the cervical spine. The
  scanned OCR renders the first subject's forename unreliably, which is why the
  event text says *the decree names both subjects and their diagnoses* rather
  than transcribing a name out of a 1933 scan.
- **26 May 1946** (canonization): two recoveries, of a woman from severe cardiac
  insufficiency with renal insufficiency (June 1933) and of a Daughter of
  Charity from a severe adhesion syndrome (21 May 1937). Again both are named in
  the decree; again the OCR of the surnames is inconsistent between the two
  places the volume prints one of them, so the dataset describes rather than
  transcribes.

In both cases the recorded event is the **recognition act**. Neither event text
says a person was cured.

## 3. Sources consulted

- **`vat-laboure-1947`** — vatican.va, Pius XII, *Aux pèlerins réunis à Rome
  pour la canonisation de sainte Catherine Labouré*, 28 July 1947. **French
  only.** The single primary document available for her canonization, and it
  is one day off the date it is being used to support.
- **`aas-23-1931`, `aas-25-1933`, `aas-38-1946`, `aas-39-1947`** — *Acta
  Apostolicae Sedis*, the scanned OCR'd PDFs on vatican.va. No longer
  volume-level pointers: each is cited to the page that carries the act. Method,
  so it can be repeated: fetch
  `https://www.vatican.va/archive/aas/documents/AAS-<vol>-<year>-ocr.pdf`, run
  `pdftotext` over it, search for the surname, then re-extract the matching page
  with `pdftotext -layout` to read the subscription cleanly. The OCR is good
  enough for Latin body text and unreliable on proper names and page numbers,
  so page numbers were confirmed against the running heads and the volume
  index.
- **`medaille-chapelle`** — Association de la Médaille Miraculeuse (French),
  the custodian of 140 rue du Bac. Official but devotional; labeled as such in
  `publisherNote`. Dates both 1830 apparitions and is the source for the
  chapel as her resting place.
- **`wp-laboure`** — Wikipedia. Carrying more weight here than anywhere else
  in the dataset, which is itself the finding.

**Consulted and not used:** vatican.va has **no Pius XI holdings** in the
homilies/speeches trees — his pontificate predates the corpus *those trees*
publish. The bootstrap generalized that into "the published corpus has a hard
edge at roughly Pius XII", and that generalization was wrong: the *Acta
Apostolicae Sedis* archive on the same host reaches back to 1909 and prints the
acts in full. The lesson is narrow and worth keeping — **an absence found in one
tree of a site is a claim about that tree, not about the site.**

Also consulted without result: the Daughters of Charity necrology (not located
online) and Paris civil registers (not attempted) — both now moot for the death
date, which the Holy See's own acts settle.

## 4. What remains unverified

1. ~~Beatification, 28 May 1933~~ — **closed.** *AAS* vol. 25, pp. 367–371.
2. ~~Canonization, 27 July 1947~~ — **closed.** *AAS* vol. 39, pp. 377–378.
3. ~~Death, 31 Dec 1876~~ — **closed** against two Holy See acts.
4. **Birth, 2 May 1806**, at Fain-lès-Moutiers, diocese of Dijon — no longer
   Wikipedia-only: the 1933 beatification letter gives the date, the place, the
   baptism on the following day and the parents' names, Pierre Labouré and
   Madeleine Gontard (`aas-25-1933` p. 368). It is still not a dataset event and
   the birthplace is still not in `figures`.
5. **The subjects of the four recognised cures.** The decrees name them; the
   scan does not render the names reliably. A clean print or microfilm of *AAS*
   25 p. 161 and *AAS* 38 pp. 443–444 would let the dataset name them the way
   the Juan Diego 2001 decree is named.
5. **The 1830 apparition dates** are marked verified on the strength of the
   *custodian's* account, not an independent one. That is a defensible
   standard for what a shrine says about its own chapel, but it is a weaker
   verification than the papal-homily class used elsewhere, and a reader
   should know the difference.
6. **Name forms in es/pt/la** — all unsourced. See `KEYWORDS.md`.
