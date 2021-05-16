import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Adjuster: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "adjuster",
    setTitleId: 935,
    names: [
        {value: "Adjuster"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have flashed back to 10 story arcs."},
    ],
    acquisition: "Complete 10 Flashback story arcs from the Pillar of Ice and Flame.",
    links: [
        {title: "Adjuster Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Adjuster_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/adjuster.png"}]
};
