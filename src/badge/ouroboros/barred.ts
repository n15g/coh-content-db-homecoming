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
    acquisition: "Complete a level 26-30 Flashback story arc using no travel powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Barred Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Barred_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/barred.png"}]
};
