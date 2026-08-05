# Juan Diego Cuauhtlatoatzin

Seer of the Guadalupe apparitions (Tepeyac, 1531) according to the Guadalupan
account received by the Church. Sibling repo: `cronologia/guadalupe`.

## 1. Identity

| Form | Language / register | Where it comes from |
|---|---|---|
| Juan Diego Cuauhtlatoatzin | canonical, as canonized | `vat-jd-canonization-2002`, `vat-jd-bio` |
| Juan Diego | short form, all languages | `vat-jd-bio` |
| Cuauhtlatoatzin | Nahuatl name (glossed in devotional literature as "he who speaks like an eagle") | `vat-jd-bio` — the Vatican biography gives the name; the *gloss* is devotional and is not asserted here |
| Cuauhtlatoatzin / Quauhtlatoatzin / Cuauhtlatohuac | orthographic variants in the literature | `wp-juan-diego` |
| San Juan Diego | es | `vat-jd-beatification-1990` (Spanish homily) |
| São João Diego | pt | not yet sourced — see §4 |

Traditional life dates: **c. 1474 – 1548**, given as traditional in the
Vatican's own canonization biography (`vat-jd-bio`). They are recorded in the
dataset with that qualifier, not as established fact.

## 2. Canonization path

| Step | Date | `dateVerified` | Declaring document |
|---|---|---|---|
| Reported apparitions | 9–12 Dec 1531 | **false** | `vat-jd-bio` — traditional dates from the Church's own account; sixteenth-century documentation is debated |
| Death (traditional) | 1548 | n/a (not a dataset event) | `vat-jd-bio` |
| Beatification by John Paul II | **6 May 1990**, Basilica of Our Lady of Guadalupe, Mexico City | **true** | `vat-jd-beatification-1990` — the beatification homily on vatican.va (Spanish only). Beatified together with the child martyrs of Tlaxcala and José María de Yermo y Parres. |
| Canonization by John Paul II | **31 July 2002**, Basilica of Our Lady of Guadalupe, Mexico City | **true** | `vat-jd-canonization-2002` — the canonization homily on vatican.va, in which John Paul II calls him the first indigenous saint of the American continent |

Both papal steps are anchored on the *declaring documents themselves*, which is
the strongest evidence class this repo recognizes. Note the asymmetry with the
apparitions: the Church's judgment on the man is documented to the day; the
1531 events it grew out of are not.

## 3. Sources consulted

- **`vat-jd-canonization-2002`** — vatican.va, homily at the rite, 31 July
  2002 (EN). Primary. Settles the canonization date.
- **`vat-jd-beatification-1990`** — vatican.va, beatification homily, 6 May
  1990. Published in **Spanish only**; there is no English version at the
  vatican.va path. Settles the beatification date.
- **`vat-jd-bio`** — vatican.va, the official biography prepared for the
  canonization. Source of the traditional 1474/1548 dates and of the account
  of the apparitions as the Church received it. Useful precisely because it is
  the Church writing in its own voice, with its own qualifiers.
- **`wp-juan-diego`** — Wikipedia, used for the historiographical debate and
  for cross-checking. Tertiary; never load-bearing on its own.

**Consulted and not used:** no page-level *Acta Apostolicae Sedis* citation was
pursued for 1990 or 2002, because the vatican.va homilies already carry the
dates directly and are the better citation. (Contrast Labouré and the pre-war
popes, where AAS is the only route.)

## 4. What remains unverified

1. **The 1531 dates** (`dateVerified: false`). They are traditional. Settling
   them is not a matter of finding a better citation — the underlying
   documentary question is open among historians and this repo does not
   propose to close it.
2. **The historicity debate.** The dataset attributes the sceptical case to
   the Vincentian historian **Stafford Poole**, but currently cites only
   `wp-juan-diego` for it. Poole's *Our Lady of Guadalupe: The Origins and
   Sources of a Mexican National Symbol* (1995) and his later exchanges should
   be cited directly, alongside a source for the Holy See's examination and
   rejection of the objections before 2002. Both halves are currently
   under-cited.
3. **The Portuguese form of the name.** `São João Diego` is listed in
   `KEYWORDS.md` as a search variant. It has not been verified against a
   Portuguese-language ecclesiastical source; listing it is a finding aid, not
   an assertion.
4. **The Nahuatl gloss.** "He who speaks like an eagle" is repeated
   everywhere in devotional literature. No linguistic source has been checked.
   It is deliberately absent from the dataset.
5. **Birth/death place detail.** Cuautitlán and Tlatelolco appear in the
   literature; not in the dataset, not verified.
