import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Troubleshooter: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "troubleshooter",
    setTitleId: 934,
    names: [
        {value: "Troubleshooter"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have flashed back to 5 story arcs."},
    ],
    acquisition: "Complete 5 Flashback story arcs from the Pillar of Ice and Flame.",
    links: [
        {title: "Troubleshooter Badge", href: "https://homecoming.wiki/wiki/Troubleshooter_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/troubleshooter.png"}]
};
