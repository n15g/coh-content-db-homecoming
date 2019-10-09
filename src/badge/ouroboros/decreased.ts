import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Decreased: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "decreased",
    names: [
        {value: "Decreased"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 35 and 39 while not gaining bonuses from slotted Enhancements."},
    ],
    acquisition: "Complete a level 35-39 Flashback arc using no enhancements.",
    links: [
        {title: "Decreased Badge", href: "https://paragonwiki.com/wiki/Decreased_Badge"}
    ],
    icons: [{value: "core.ouroboros.decreased"}]
};
