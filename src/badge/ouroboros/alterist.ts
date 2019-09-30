import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Alterist: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "alterist",
    names: [
        {value: "Alterist"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have flashed back to 20 story arcs."},
    ],
    acquisition: "Complete 20 Flashback story arcs from the Pillar of Ice and Flame.",
    links: [
        {title: "Alterist Badge", href: "https://paragonwiki.com/wiki/Alterist_Badge"}
    ],
    imageKeys: [{value: "core.ouroboros.alterist"}]
};
