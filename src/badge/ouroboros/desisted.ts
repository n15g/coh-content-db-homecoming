import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Desisted: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "desisted",
    names: [
        {value: "Desisted"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 20 and 24 while not using any Travel Power Pools."},
    ],
    acquisition: "Complete a level 20-24 Flashback arc using no travel powers.",
    links: [
        {title: "Desisted Badge", href: "https://paragonwiki.com/wiki/Desisted_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/desisted.png"}]
};
