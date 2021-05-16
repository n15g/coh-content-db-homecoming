import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Temerarious: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "temerarious",
    setTitleId: 876,
    names: [
        {value: "Temerarious"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 46 and 50 while under a constant Debuff.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 46 and 50 while under a constant Debuff.`}
    ],
    acquisition: "Complete a level 46-50 Flashback story arc while debuffed.",
    links: [
        {title: "Temerarious Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Temerarious_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/temerarious.png"}]
};
