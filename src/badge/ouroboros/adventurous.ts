import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Adventurous: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "adventurous",
    names: [
        {value: "Adventurous"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 20 and 24 while under a constant Debuff."},
    ],
    acquisition: "Finish a level 20-24 Flashback story arc while debuffed.",
    links: [
        {title: "Adventurous Badge", href: "https://paragonwiki.com/wiki/Adventurous_Badge"}
    ],
    imageKeys: [{value: "core.ouroboros.adventurous"}]
};
