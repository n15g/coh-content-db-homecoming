import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Dull: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "dull",
    names: [
        {value: "Dull"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 30 and 34 while not using Inspirations."},
    ],
    acquisition: "Complete a level 30-34 Flashback arc using no inspirations.",
    links: [
        {title: "Dull Badge", href: "https://paragonwiki.com/wiki/Dull_Badge"}
    ],
    icons: [{value: "core.ouroboros.dull"}]
};
