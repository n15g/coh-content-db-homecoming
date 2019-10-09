import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Obligated: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "obligated",
    names: [
        {value: "Obligated"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 35 and 39 while only using your Primary and Secondary powersets."},
    ],
    acquisition: "Complete a level 35-39 Flashback arc using no pool powers.",
    links: [
        {title: "Obligated Badge", href: "https://paragonwiki.com/wiki/Obligated_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/obligated.png"}]
};
