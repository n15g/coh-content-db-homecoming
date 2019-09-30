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
    acquisition: "Complete a level 30-34 Flashback arc using no travel powers.",
    links: [
        {title: "Still Badge", href: "https://paragonwiki.com/wiki/Still_Badge"}
    ],
    imageKeys: [{value: "core.ouroboros.still"}]
};
