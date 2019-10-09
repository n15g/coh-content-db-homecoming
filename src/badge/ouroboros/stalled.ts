import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Stalled: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "stalled",
    names: [
        {value: "Stalled"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 35 and 39 while not using any Travel Power Pools."},
    ],
    acquisition: "Complete a level 35-39 Flashback arc using no travel powers.",
    links: [
        {title: "Stalled Badge", href: "https://paragonwiki.com/wiki/Stalled_Badge"}
    ],
    icons: [{value: "core.ouroboros.stalled"}]
};
