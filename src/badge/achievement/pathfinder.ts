import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Pathfinder: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "pathfinder",
    names: [
        {value: "Pathfinder"},
        {type: Alternate.MP, value: "Knows He Knows Not"},
        {type: Alternate.FP, value: "Knows She Knows Not"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Your eye for exploration and achievement is recognized. You have earned 100 badges."},
        {type: Alternate.P, value: "The secrets of all dimensions lie before you. You realize 100 badges is but a step in the right direction."}
    ],
    acquisition: "Earn this badge by earning 100 badges.",
    links: [
        {title: "Pathfinder Badge", href: "https://paragonwiki.com/wiki/Pathfinder_Badge"},
        {title: "Knows He/She Knows Not Badge", href: "https://paragonwiki.com/wiki/Knows_He_Knows_Not_Badge"},
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/badge-count-100-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/badge-count-100-v.png"}
    ]
};
