import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Still: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "still",
    names: [
        {value: "Still"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 30 and 34 while not using any Travel Power Pools."},
    ],
    acquisition: "Complete a level 31-35 Flashback story arc using no travel powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Still Badge", href: "https://paragonwiki.com/wiki/Still_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/still.png"}]
};
