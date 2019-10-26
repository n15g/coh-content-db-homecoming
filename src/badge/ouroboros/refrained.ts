import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Refrained: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "refrained",
    names: [
        {value: "Refrained"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 1 and 15 while not using any Travel Power Pools."},
    ],
    acquisition: "Complete a level 1-15 Flashback story arc using no travel powers.",
    links: [
        {title: "Refrained Badge", href: "https://paragonwiki.com/wiki/Refrained_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/refrained.png"}]
};
