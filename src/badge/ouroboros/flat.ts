import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Flat: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "flat",
    names: [
        {value: "Flat"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 20 and 24 while not using Inspirations."},
    ],
    acquisition: "Complete a level 20-24 Flashback arc using no inspirations.",
    links: [
        {title: "Flat Badge", href: "https://paragonwiki.com/wiki/Flat_Badge"}
    ],
    imageKeys: [{value: "core.ouroboros.flat"}]
};
