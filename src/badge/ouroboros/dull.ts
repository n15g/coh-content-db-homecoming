import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Dull: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "dull",
    names: [
        {value: "Dull"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 30 and 34 while not using Inspirations."},
    ],
    acquisition: "Complete a level 31-35 Flashback story arc using no inspirations. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Dull Badge", href: "https://paragonwiki.com/wiki/Dull_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/dull.png"}]
};
