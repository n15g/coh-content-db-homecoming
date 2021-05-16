import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const PentadVictor: IBadgeData = {
    type: BadgeType.PVP,
    key: "pentad-victor",
    setTitleId: 1356,
    names: [
        {value: "Pentad Victor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've won your first Pentad or Septad match, you're considered a Pentad Victor."}
    ],
    acquisition: "Win a rated or unrated Pentad or Septad match in the Arena",
    links: [
        {title: "Pentad Victor Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Pentad_Victor_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pentad-victor-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pentad-victor-v.png"}
    ],
};
