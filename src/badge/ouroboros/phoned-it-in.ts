import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const PhonedItIn: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "phoned-it-in",
    names: [
        {value: "Phoned it in"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 35 and 39 while not using Inspirations."},
    ],
    acquisition: "Complete a level 35-39 Flashback arc using no inspirations.",
    links: [
        {title: "Phoned it in Badge", href: "https://paragonwiki.com/wiki/Phoned_It_In_Badge"}
    ],
    icons: [{value: "core.ouroboros.phoned-it-in"}]
};
