import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Uninspired: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "uninspired",
    names: [
        {value: "Uninspired"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 46 and 50 while not using Inspirations."},
    ],
    acquisition: "Complete a level 46-50 Flashback arc using no inspirations.",
    links: [
        {title: "Uninspired Badge", href: "https://paragonwiki.com/wiki/Uninspired_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/uninspired.png"}]
};
