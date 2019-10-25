import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TimeFixer: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "time-fixer",
    setTitleId: 942,
    names: [
        {value: "Time Fixer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have flashed back to 45 story arcs."},
    ],
    acquisition: "Complete 45 Flashback story arcs from the Pillar of Ice and Flame.",
    links: [
        {title: "Time Fixer Badge", href: "https://paragonwiki.com/wiki/Time_Fixer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/time-fixer.png"}]
};
