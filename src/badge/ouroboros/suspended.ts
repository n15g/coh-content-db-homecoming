import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Suspended: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "suspended",
    names: [
        {value: "Suspended"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 46 and 50 while not using any Travel Power Pools."},
    ],
    acquisition: "Complete a level 46-50 Flashback story arc using no travel powers.",
    links: [
        {title: "Suspended Badge", href: "https://paragonwiki.com/wiki/Suspended_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/suspended.png"}]
};
