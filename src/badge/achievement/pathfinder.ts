import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Pathfinder: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "pathfinder",
    setTitleId: 29,
    setTitleIdPraetorian: 1663,
    names: [
        {value: "Pathfinder"},
        {type: Alternate.MP, value: "Knows He Knows Not"},
        {type: Alternate.FP, value: "Knows She Knows Not"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Your eye for exploration and achievement is recognized. You have earned 100 badges."},
        {
            type: Alternate.P, value: "The secrets of all dimensions lie before you. You realize 100 badges is but a step in the " +
                "right direction."
        }
    ],
    acquisition: "Earn 100 badges",
    links: [
        {title: "Pathfinder Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Pathfinder_Badge"},
        {title: "Knows He Knows Not Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Knows_He_Knows_Not_Badge"},
        {title: "Knows She Knows Not Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Knows_She_Knows_Not_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/pathfinder-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/pathfinder-v.png"}
    ],
};
