import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Lessened: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "lessened",
    names: [
        {value: "Lessened"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 1 and 15 while not gaining bonuses from slotted Enhancements."},
    ],
    acquisition: "Complete a level 1-15 Flashback arc using no enhancements.",
    links: [
        {title: "Lessened Badge", href: "https://paragonwiki.com/wiki/Lessened_Badge"}
    ],
    imageKeys: [{value: "core.ouroboros.lessened"}]
};
