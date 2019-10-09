import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Calibrator: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "calibrator",
    names: [
        {value: "Calibrator"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have flashed back to 15 story arcs."},
    ],
    acquisition: "Complete 15 Flashback story arcs from the Pillar of Ice and Flame.",
    links: [
        {title: "Calibrator Badge", href: "https://paragonwiki.com/wiki/Calibrator_Badge"}
    ],
    icons: [{value: "core.ouroboros.calibrator"}]
};
