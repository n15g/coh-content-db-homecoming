import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Repairman: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "repairman",
    setTitleId: 940,
    names: [
        {type: Alternate.M, value: "Repairman"},
        {type: Alternate.F, value: "Repairwoman"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have flashed back to 35 story arcs."},
    ],
    acquisition: "Complete 35 Flashback story arcs from the Pillar of Ice and Flame.",
    links: [
        {title: "Repairman Badge", href: "https://homecoming.wiki/wiki/Repairman_Badge"},
        {title: "Repairwoman Badge", href: "https://homecoming.wiki/wiki/Repairwoman_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/repairman.png"}]
};
