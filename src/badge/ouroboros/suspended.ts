import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Suspended: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "suspended",
    setTitleId: 903,
    names: [
        {value: "Suspended"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 46 and 50 while not using any Travel Power Power Pools.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 46 and 50 while not using any Travel Power Power Pools.`}
    ],
    acquisition: "Complete a level 46-50 Flashback arc using no travel powers.",
    links: [
        {title: "Suspended Badge", href: "https://paragonwiki.com/wiki/Suspended_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/suspended.png"}]
};
