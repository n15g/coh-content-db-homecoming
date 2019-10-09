import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Barred: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "barred",
    names: [
        {value: "Barred"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 25 and 29 while not using any Travel Power Pools."},
    ],
    acquisition: "Complete a level 25-29 Flashback arc using no travel powers.",
    links: [
        {title: "Barred Badge", href: "https://paragonwiki.com/wiki/Barred_Badge"}
    ],
    icons: [{value: "core.ouroboros.barred"}]
};
