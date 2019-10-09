import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Capped: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "capped",
    names: [
        {value: "Capped"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 20 and 24 while not using any Temporary Powers."},
    ],
    acquisition: "Complete a level 20-24 Flashback arc using no temp powers.",
    links: [
        {title: "Capped Badge", href: "https://paragonwiki.com/wiki/Capped_Badge"}
    ],
    icons: [{value: "core.ouroboros.capped"}]
};
