import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Indifferent: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "indifferent",
    names: [
        {value: "Indifferent"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 40 and 45 while not using Inspirations."},
    ],
    acquisition: "Complete a level 40-45 Flashback arc using no inspirations.",
    links: [
        {title: "Indifferent Badge", href: "https://paragonwiki.com/wiki/Indifferent_Badge"}
    ],
    imageKeys: [{value: "core.ouroboros.indifferent"}]
};
