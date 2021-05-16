import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const GoldMedalist: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "gold-medalist",
    setTitleId: 862,
    names: [
        {value: "Gold Medalist"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback within the Gold time allowed.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback within the Gold time allowed.`}
    ],
    acquisition: "Complete a Flashback story arc in under 30 minutes.",
    links: [
        {title: "Gold Medalist Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Gold_Medalist_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/gold-medalist.png"}]
};
