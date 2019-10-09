import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Adjuster: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "adjuster",
    names: [
        {value: "Adjuster"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have flashed back to 10 story arcs."},
    ],
    acquisition: "Complete 10 Flashback story arcs from the Pillar of Ice and Flame.",
    links: [
        {title: "Adjuster Badge", href: "https://paragonwiki.com/wiki/Adjuster_Badge"}
    ],
    icons: [{value: "core.ouroboros.adjuster"}]
};
