import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Still: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "still",
    setTitleId: 900,
    names: [
        {value: "Still"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 30 and 34 while not using any Travel Power Power Pools.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 30 and 34 while not using any Travel Power Power Pools.`}
    ],
    acquisition: "Complete a level 31-35 Flashback story arc using no travel powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Still Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Still_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/still.png"}]
};
