import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Stemmed: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "stemmed",
    names: [
        {value: "Stemmed"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 40 and 45 while not using any Travel Power Pools."},
    ],
    acquisition: "Complete a level 40-45 Flashback arc using no travel powers.",
    links: [
        {title: "Stemmed Badge", href: "https://paragonwiki.com/wiki/Stalled_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/stemmed.png"}]
};
