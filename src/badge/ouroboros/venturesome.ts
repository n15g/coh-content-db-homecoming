import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Venturesome: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "venturesome",
    names: [
        {value: "Venturesome"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 35 and 39 while under a constant Debuff."},
    ],
    acquisition: "Complete a level 36-40 Flashback story arc while debuffed. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Venturesome Badge", href: "https://paragonwiki.com/wiki/Venturesome_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/venturesome.png"}]
};
