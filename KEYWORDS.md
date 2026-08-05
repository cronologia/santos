# KEYWORDS.md — finding aid for searching sources about these saints

Naming variants, language forms, and known search traps.

**Listing a term here is not asserting it** (`core` → skills/sourcing-rules).
Several forms below are *unsourced* and are marked so: they are here because a
search should try them, not because this project claims they are correct. Where
a form is load-bearing in the dataset, the reference id is given.

**Before reporting that a source says nothing about a saint, read this file.**
Most false zeros in this subject come from three places: accented characters
matched with single-character wildcards, the Spanish/Portuguese *hispanised*
forms of French names (Bernadette → **Bernardita**, not "Bernadete" in Spanish),
and Latin forms in the *Acta Apostolicae Sedis*, which is where the pre-war
papal acts actually live.

---

## Juan Diego Cuauhtlatoatzin

| Lang | Form | Sourced? |
|---|---|---|
| es | **Juan Diego Cuauhtlatoatzin**, San Juan Diego | yes — `vat-jd-beatification-1990` (the 1990 homily is Spanish-only) |
| en | Juan Diego | yes — `vat-jd-canonization-2002`, `vat-jd-bio` |
| pt | São João Diego, Juan Diego | **no** |
| fr | Saint Juan Diego | **no** |
| la | Ioannes Didacus Cuauhtlatoatzin | **no** — the expected AAS form; untested |
| nah | **Cuauhtlatoatzin** | yes (the name) — `vat-jd-bio`. The devotional gloss "he who speaks like an eagle" is **not** sourced and is deliberately absent from the dataset. |

**Orthographic variants** (all attested in the literature, `wp-juan-diego`):
`Cuauhtlatoatzin`, `Quauhtlatoatzin`, `Cuauhtlatohuac`, `Cuautlatoatzin`.

**Traps.**
- The name is long and is frequently truncated to `Juan Diego`, which as a
  bare string matches an enormous number of unrelated Spanish-language
  documents. Always pair it with `Guadalupe`, `Tepeyac` or `Cuauhtlatoatzin`.
- vatican.va has **no English text** for the 1990 beatification. Searching the
  English tree returns nothing and that zero is an artifact of the corpus, not
  a fact about the beatification. Positive control: the same query against the
  Spanish tree returns `hf_jp-ii_hom_19900506_citta-del-messico`.
- Related but distinct: **Our Lady of Guadalupe** (the apparition/image, repo
  `cronologia/guadalupe`) vs **Juan Diego** (the person, this repo). Also
  distinct: the Spanish *Virgen de Guadalupe* of Extremadura.

---

## Catherine Labouré

| Lang | Form | Sourced? |
|---|---|---|
| fr | **Catherine Labouré**, sainte Catherine Labouré | yes — `vat-laboure-1947`, `medaille-chapelle` |
| fr | **Zoé Labouré** (baptismal name) | tertiary only — `wp-laboure` |
| es | Santa Catalina Labouré | **no** |
| pt | Santa Catarina Labouré | **no** |
| en | Catherine Labouré | yes — `wp-laboure` |
| la | Catharina Labouré / Catharina Laboure | **no** — the expected AAS form |

**Traps.**
- **The acute accent.** `Labouré` ends in an accented character. A byte-level
  wildcard (`Labour.`) matches nothing in UTF-8, and `Laboure` unaccented is
  how many English and Latin sources render it. Search both.
- `Laboure` unaccented also collides with the English word *labour* /
  *laboure(d)* in older texts. Use word boundaries and pair with `Catherine`
  or `rue du Bac`.
- **Her identity was concealed during her lifetime.** She is largely absent
  from nineteenth-century sources *by design* — she told only her confessor —
  and became publicly known around her 1876 death. An absence in 1830–1876
  material is expected and is not evidence about the apparitions either way.
- The apparition is usually indexed under the **Miraculous Medal** (*Médaille
  Miraculeuse*, *Medalla Milagrosa*, *Medalha Milagrosa*) or **rue du Bac**,
  not under her name.
- **Pius XI and Pius XII are not on vatican.va** except for a thin speeches
  tree. Her 1933 beatification and 1947 canonization live in the *Acta
  Apostolicae Sedis* — vols. **25 (1933)** and **39 (1947)** — as scanned,
  OCR'd Latin PDFs. Search the Latin form there, not the French one.

---

## Bernadette Soubirous

| Lang | Form | Sourced? |
|---|---|---|
| fr | **Bernadette Soubirous** | yes — `lourdes-apparitions`, `lourdes-beatification-centenary` |
| fr | Marie-Bernarde Soubirous; **Sœur Marie-Bernard** (name in religion) | tertiary only — `wp-bernadette` |
| es | **Santa Bernardita** / Bernardita Soubirous | **no** |
| pt | Santa Bernadete / Bernardete Soubirous | **no** |
| en | Bernadette Soubirous, Bernadette of Lourdes | yes |
| la | Maria Bernarda Soubirous | **no** — expected AAS form |

**Traps.**
- **The Spanish form is not a transliteration.** Spanish-language sources
  overwhelmingly use **Bernardita**, not "Bernadette". A Spanish corpus swept
  for `Bernadette` will under-report badly. (Portuguese usually keeps a form
  closer to the French, but `Bernadete` without the *t* is common.)
- **Her name in religion hides her.** Convent, diocesan and necrological
  records from 1866 onward may call her only **Sœur Marie-Bernard**. A search
  of Nevers material for "Soubirous" can legitimately return nothing while the
  records are full of her.
- **She is not buried at Lourdes.** Nevers / **Saint-Gildard** is where the
  death and burial records are. Searching Lourdes material for her death is a
  category error, and this specific confusion is recorded in the dataset.
- `Soubirous` is stable and unaccented — a good positive control for a French
  corpus when the accented queries are returning suspicious zeros.

---

## Francisco Marto and Jacinta Marto

| Lang | Form | Sourced? |
|---|---|---|
| pt | **Francisco Marto**, São Francisco Marto | yes — `fatima-francisco-birth` |
| pt | **Jacinta Marto**, Santa Jacinta Marto | yes — `fatima-jacinta-birth`, `vaticanstate-jacinta` |
| pt | Francisco de Jesus Marto; Jacinta de Jesus Marto | tertiary only — `wp-marto` |
| es | San Francisco Marto; Santa Jacinta Marto | **no** (the Jacinta form is identical in pt and es) |
| fr | saint François Marto; sainte Jacinthe Marto | **no** — note the French **Jacinthe** |
| en | Francisco and Jacinta Marto | yes |
| la | Franciscus Marto; Jacintha Marto | **no** |

**Collective terms** — usually more productive than either name alone:

| Lang | Term |
|---|---|
| pt | **os pastorinhos**, os três pastorinhos, os videntes de Fátima |
| es | los pastorcitos, los tres pastorcitos, los videntes de Fátima |
| en | the shepherd children, the three shepherd children, the Fátima seers |
| fr | les trois bergers, les pastoureaux |

**Traps.**
- **`Fátima` carries an acute accent** and is written `Fatima` in most English
  sources. Both are needed. It is also an extremely common **given name** in
  Portuguese and across the Muslim world; unqualified, it is one of the worst
  search terms in this whole subject. Always pair with `Marto`, `Cova da
  Iria`, `Aljustrel` or `pastorinhos`.
- **`Marto` alone** collides with Italian and Spanish word fragments and with
  the surname of unrelated persons. Use word boundaries.
- **Francisco vs. Pope Francis.** The saint is `Francisco Marto`; the
  canonizing pope is `Francisco` in Spanish and Portuguese and `Francesco` in
  the vatican.va URL path. A Spanish-language search for
  `Francisco` + `canonización` + `Fátima` returns the pope, the saint, and
  documents about both. The 2017 canonization is the one event where the two
  are guaranteed to co-occur.
- **The third seer is not a saint.** `Lúcia dos Santos` / `Sister Lúcia` /
  `Irmã Lúcia` / `Sor Lucía` (also `Lúcia de Jesus Rosa dos Santos`) is
  **Venerable** as of the decree of 22 June 2023, not beatified and not
  canonized. Sources that call her "Santa Lúcia" are either wrong or are
  talking about **Saint Lucy of Syracuse** (`Santa Luzia` in pt, `Santa
  Lucía` in es) — a fourth-century martyr with no connection to Fátima. This
  collision is real and common.

---

## Cross-cutting traps

1. **`Santos` is this repo's own name and a Portuguese surname.** `Lúcia dos
   Santos` contains it. `Santos` as a search term in a Portuguese corpus
   matches the plural of *santo*, the surname, and the city of Santos. Never
   use it bare.
2. **`canonization` / `canonización` / `canonização` / `canonizatio`** — and
   note that the English/US spelling `canonisation` is common in
   British-published and Commonwealth Catholic sources.
3. **The step vocabulary is a closed set and each step has its own words.**
   Searching for the wrong step returns a true zero about the wrong question:

   | en | es | pt | la |
   |---|---|---|---|
   | Servant of God | Siervo de Dios | Servo de Deus | Servus Dei |
   | Venerable | Venerable | Venerável | Venerabilis |
   | Blessed / beatification | Beato/a, beatificación | Beato/a, beatificação | Beatus/a, beatificatio |
   | Saint / canonization | Santo/a, canonización | Santo/a, canonização | Sanctus/a, canonizatio |
   | heroic virtues | virtudes heroicas | virtudes heroicas | virtutes heroicae |
   | worthy of belief (apparition) | digna de crédito | digna de crédito | — |

4. **vatican.va coverage has a hard edge at roughly Pius XII.** John Paul II,
   Benedict XVI and Francis are richly published in several languages; **Pius
   XI is essentially absent** and Pius XII is thin and mostly French/Italian.
   A zero on vatican.va for a 1925, 1933 or 1947 act is an artifact of the
   corpus. The fallback is the *Acta Apostolicae Sedis* archive
   (`vatican.va/archive/aas/`) — **scanned OCR'd PDFs, in Latin**, one volume
   per year. OCR quality is uneven; expect Latin, expect errors, and expect to
   search inside the PDF rather than via the site index.
5. **A canonization homily is not a decree.** The homily is preached *at* the
   rite and is what vatican.va publishes; the juridical act is elsewhere.
   Homilies are excellent date evidence and are what this dataset mostly
   cites; do not describe them as the decree.
6. **Shrine sites are custodian records.** `fatima.pt`, `lourdes-france.com`
   and `medaille-miraculeuse.fr` are official *and* devotional. They are
   cited here with that label in `publisherNote`. They are reliable for their
   own institutional facts and are not independent on the apparitions.
