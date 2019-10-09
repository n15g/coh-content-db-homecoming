import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Unenhanced: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "unenhanced",
    names: [
        {value: "Unenhanced"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 46 and 50 while not gaining bonuses from slotted Enhancements."},
    ],
    acquisition: "Complete a level 46-50 Flashback arc using no enhancements.",
    links: [
        {title: "Unenhanced Badge", href: "https://paragonwiki.com/wiki/Unenhanced_Badge"}
    ],
    icons: [{value: "core.ouroboros.unenhanced"}]
};
