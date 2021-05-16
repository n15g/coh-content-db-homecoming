import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Deathless: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "deathless",
    setTitleId: 233,
    setTitleIdPraetorian: 1684,
    names: [
        {value: "Deathless"},
        {type: Alternate.P, value: "Impulsive"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You have proven that you are Deathless in your pursuit against evil."},
        {type: Alternate.V, value: "You have proven that you are Deathless in your pursuit of evil."},
        {
            type: Alternate.P, value: "Perhaps TPN was right when they said Praetoria would never die. At least when it comes to you, " +
                "it's holding up."
        }
    ],
    acquisition: "Pay off 400,000 debt",
    links: [
        {title: "Deathless Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Deathless_Badge"},
        {title: "Impulsive Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Impulsive_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png"}
    ],
};
