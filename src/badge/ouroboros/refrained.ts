import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Refrained: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "refrained",
    setTitleId: 895,
    names: [
        {value: "Refrained"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 1 and 15 while not using any Travel Power Power Pools.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 1 and 15 while not using any Travel Power Power Pools.`}
    ],
    acquisition: "Complete a level 1-15 Flashback story arc using no travel powers.",
    links: [
        {title: "Refrained Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Refrained_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/refrained.png"}]
};
