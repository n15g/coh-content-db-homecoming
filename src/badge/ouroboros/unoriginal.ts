import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Unoriginal: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "unoriginal",
    names: [
        {value: "Unoriginal"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 25 and 29 while not using Inspirations."},
    ],
    acquisition: "Complete a level 25-29 Flashback arc using no inspirations.",
    links: [
        {title: "Unoriginal Badge", href: "https://paragonwiki.com/wiki/Unoriginal_Badge"}
    ],
    imageKeys: [{value: "core.ouroboros.unoriginal"}]
};
