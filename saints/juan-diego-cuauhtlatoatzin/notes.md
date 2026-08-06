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
| Historical consultors | 30 Jan 1990 | recited, not a dataset event | `aas-82-1990` p. 854 |
| Theological consultors | 9 Mar 1990 | recited, not a dataset event | `aas-82-1990` p. 854 |
| Cardinals and bishops | 3 Apr 1990 | recited, not a dataset event | `aas-82-1990` p. 854 |
| Decree on **holiness of life and immemorial cult** | **9 Apr 1990** | **true** | `aas-94-2002` p. 488 ("Congregatio de Causis Sanctorum die 9 mensis Aprilis anno 1990 decretum promulgavit super vitae Servi Dei sanctitate et super cultu ab immemorabili tempore ei praestito"); `aas-82-1990` p. 855 |
| Beatification by John Paul II | **6 May 1990**, Basilica of Our Lady of Guadalupe, Mexico City | **true** | `vat-jd-beatification-1990` (homily) and `aas-82-1990` pp. 853–855 (the apostolic letter granting the liturgical cult, given at Mexico City the same day) |
| Miracle for the canonization | **20 Dec 2001** | **true** | `aas-94-2002` pp. 488–489 |
| Canonization by John Paul II | **31 July 2002**, Basilica of Our Lady of Guadalupe, Mexico City | **true** | `vat-jd-canonization-2002` |

### He has no Venerable step, and that is not a gap

**Juan Diego was not beatified by the ordinary route.** The 9 April 1990 decree
is *super vitae sanctitate et super cultu ab immemorabili tempore praestito* —
the equipollent route, confirmation of an immemorial cult. There is therefore
**no decree on heroic virtues and no beatification miracle** in his path, and
looking for one is looking for a document that was never issued. Widely
repeated summaries that call 9 April 1990 "the beatification" or "the decree of
heroic virtues" are wrong on both counts; the beatification is the 6 May rite
and letter.

This is the single most important structural fact about his cause, and it is now
a `disambiguation` entry, because the comparison a reader will reach for —
471 years for Juan Diego against 98 for Jacinta Marto — compares two different
procedures, not two speeds.

### The canonization miracle, and how the decree is worded

`aas-94-2002` pp. 488–489, 20 December 2001, **names its subject**: "Constare de
miraculo a Deo patrato per intercessionem Beati Ioannis Didaci Cuauhtlatoatzin
… videlicet de celerrima, integra et mansura sanatione **Ioannis Iosephi
Barragan Silva**", who on 3 May 1990 fell some ten metres, and whose injuries
the decree quotes in Italian from the medical finding. Because the decree names
him, the dataset names him. Contrast the Marto decrees of 1999 and 2017, which
describe the case and name nobody — and where the dataset therefore names
nobody, even though press accounts do.

Note the asymmetry with the apparitions, which the bootstrap put well and this
pass has only sharpened: the Church's judgment on the man is now documented to
the day at six points; the 1531 events it grew out of are not documented at
all in the same class of evidence.

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

- **`aas-82-1990`** — *AAS* vol. 82, pp. 853–855: the apostolic letter granting
  the liturgical cult, which recites every session of the 1990 cause and the
  9 April decree.
- **`aas-94-2002`** — *AAS* vol. 94, pp. 488–489: the 20 December 2001 decree
  *super miraculo*, which also rehearses the 1990 steps. The better of the two
  for the shape of the cause.

**Reversed from the bootstrap:** it recorded that "no page-level *Acta
Apostolicae Sedis* citation was pursued for 1990 or 2002, because the
vatican.va homilies already carry the dates directly and are the better
citation." The homilies are indeed the better citation *for the two rites*. They
are silent on everything else, and everything else — the equipollent route, the
sessions, the named miracle — is only in AAS. The bootstrap's reasoning was
sound for the question it asked and stopped one question early.

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
5. **Birth/death place detail.** Cuautitlán appears in the 2001 decree itself
   ("natus est circiter annum 1474 in vico Cuautitlan", `aas-94-2002` p. 488),
   so it is now primary-sourced even though it is still not in the dataset.
   Tlatelolco appears only in the literature.
6. **The 1990 decree text itself.** The dataset cites two documents that
   *recite* the 9 April 1990 decree rather than the decree as printed. It is
   presumably in *AAS* vol. 82 in its own right; the recitals were enough for
   this pass and locating the decree proper is a durability improvement.
