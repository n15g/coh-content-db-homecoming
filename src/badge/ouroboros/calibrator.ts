import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Calibrator: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "calibrator",
    setTitleId: 936,
    names: [
        {value: "Calibrator"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have flashed back to 15 story arcs."},
    ],
    acquisition: "Complete 15 Flashback story arcs from the Pillar of Ice and Flame.",
    links: [
        {title: "Calibrator Badge", href: "https://homecoming.wiki/wiki/Calibrator_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/calibrator.png"}]
};
