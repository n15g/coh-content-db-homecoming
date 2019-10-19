import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Temerarious: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "temerarious",
    names: [
        {value: "Temerarious"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 46 and 50 while under a constant Debuff."},
    ],
    acquisition: "Complete a level 46-50 Flashback story arc while debuffed.",
    links: [
        {title: "Temerarious Badge", href: "https://paragonwiki.com/wiki/Temerarious_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/temerarious.png"}]
};
