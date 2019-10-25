import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Barred: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "barred",
    setTitleId: 899,
    names: [
        {value: "Barred"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 25 and 29 while not using any Travel Power Power Pools.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 25 and 29 while not using any Travel Power Power Pools.`}
    ],
    acquisition: "Complete a level 25-29 Flashback arc using no travel powers.",
    links: [
        {title: "Barred Badge", href: "https://paragonwiki.com/wiki/Barred_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/barred.png"}]
};
