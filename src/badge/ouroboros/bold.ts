import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Bold: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "bold",
    names: [
        {value: "Bold"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 20 and 24 while the enemies were Buffed."},
    ],
    acquisition: "Complete a level 20-24 Flashback arc with enemies buffed.",
    links: [
        {title: "Bold Badge", href: "https://paragonwiki.com/wiki/Bold_Badge"}
    ],
    icons: [{value: "core.ouroboros.bold"}]
};
