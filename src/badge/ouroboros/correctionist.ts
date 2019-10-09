import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Correctionist: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "correctionist",
    names: [
        {value: "Correctionist"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have flashed back to 30 story arcs."},
    ],
    acquisition: "Complete 30 Flashback story arcs from the Pillar of Ice and Flame.",
    links: [
        {title: "Correctionist Badge", href: "https://paragonwiki.com/wiki/Correctionist_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/correctionist.png"}]
};
