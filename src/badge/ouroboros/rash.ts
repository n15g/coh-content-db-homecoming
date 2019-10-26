import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Rash: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "rash",
    names: [
        {value: "Rash"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 30 and 34 while under a constant Debuff."},
    ],
    acquisition: "Complete a level 31-35 Flashback story arc while debuffed. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Rash Badge", href: "https://paragonwiki.com/wiki/Rash_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/rash.png"}]
};
