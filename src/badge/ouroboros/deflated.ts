import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Deflated: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "deflated",
    names: [
        {value: "Deflated"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 30 and 34 while not gaining bonuses from slotted Enhancements."},
    ],
    acquisition: "Complete a level 30-34 Flashback arc using no enhancements.",
    links: [
        {title: "Deflated Badge", href: "https://paragonwiki.com/wiki/Deflated_Badge"}
    ],
    imageKeys: [{value: "core.ouroboros.deflated"}]
};
