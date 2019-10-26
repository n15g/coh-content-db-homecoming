import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Stalled: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "stalled",
    setTitleId: 901,
    names: [
        {value: "Stalled"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 35 and 39 while not using any Travel Power Power Pools.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 35 and 39 while not using any Travel Power Power Pools.`}
    ],
    acquisition: "Complete a level 36-40 Flashback story arc using no travel powers.",
    links: [
        {title: "Stalled Badge", href: "https://paragonwiki.com/wiki/Stalled_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/stalled.png"}]
};
