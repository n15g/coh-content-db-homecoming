import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Desisted: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "desisted",
    setTitleId: 898,
    names: [
        {value: "Desisted"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 20 and 24 while not using any Travel Power Power Pools.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 20 and 24 while not using any Travel Power Power Pools.`}
    ],
    acquisition: "Complete a level 20-24 Flashback arc using no travel powers.",
    links: [
        {title: "Desisted Badge", href: "https://paragonwiki.com/wiki/Desisted_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/desisted.png"}]
};
