import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TimeFixer: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "time-fixer",
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
    imageKeys: [{value: "core.ouroboros.time-fixer"}]
};
