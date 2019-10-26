import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Missionary: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "missionary",
    names: [
        {value: "Missionary"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 40 and 45 while only using your Primary and Secondary powersets."},
    ],
    acquisition: "Complete a level 41-45 Flashback story arc using no pool powers.",
    links: [
        {title: "Missionary Badge", href: "https://paragonwiki.com/wiki/Missionary_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/missionary.png"}]
};
