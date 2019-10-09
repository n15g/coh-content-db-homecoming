import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Balancer: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "balancer",
    names: [
        {value: "Balancer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have flashed back to 25 story arcs."},
    ],
    acquisition: "Complete 25 Flashback story arcs from the Pillar of Ice and Flame.",
    links: [
        {title: "Balancer Badge", href: "https://paragonwiki.com/wiki/Balancer_Badge"}
    ],
    icons: [{value: "core.ouroboros.balancer"}]
};
