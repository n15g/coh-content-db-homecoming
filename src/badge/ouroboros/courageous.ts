import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Courageous: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "courageous",
    names: [
        {value: "Courageous"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 15 and 19 while the enemies were Buffed."},
    ],
    acquisition: "Complete a level 15-19 Flashback arc with enemies buffed.",
    links: [
        {title: "Courageous Badge", href: "https://paragonwiki.com/wiki/Courageous_Badge"}
    ],
    icons: [{value: "core.ouroboros.courageous"}]
};
