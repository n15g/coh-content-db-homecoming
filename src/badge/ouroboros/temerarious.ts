import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Temerarious: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "temerarious",
    names: [
        {value: "Temerarious"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 46 and 50 while under a constant Debuff."},
    ],
    acquisition: "Finish a level 46-50 Flashback story arc while debuffed.",
    links: [
        {title: "Temerarious Badge", href: "https://paragonwiki.com/wiki/Temerarious_Badge"}
    ],
    imageKeys: [{value: "core.ouroboros.temerarious"}]
};
