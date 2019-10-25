import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Venturesome: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "venturesome",
    setTitleId: 874,
    names: [
        {value: "Venturesome"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 35 and 39 while under a constant Debuff.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 35 and 39 while under a constant Debuff.`}
    ],
    acquisition: "Complete a level 35-39 Flashback story arc while debuffed.",
    links: [
        {title: "Venturesome Badge", href: "https://paragonwiki.com/wiki/Venturesome_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/venturesome.png"}]
};
