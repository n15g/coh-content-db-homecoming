import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Weakened: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "weakened",
    names: [
        {value: "Weakened"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 25 and 29 while not gaining bonuses from slotted Enhancements."},
    ],
    acquisition: "Complete a level 25-29 Flashback arc using no enhancements.",
    links: [
        {title: "Weakened Badge", href: "https://paragonwiki.com/wiki/Weakened_Badge"}
    ],
    imageKeys: [{value: "core.ouroboros.weakened"}]
};
