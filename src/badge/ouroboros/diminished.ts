import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Diminished: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "diminished",
    names: [
        {value: "Diminished"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 1 and 15 while not using any Temporary Powers."},
    ],
    acquisition: "Complete a level 1-15 Flashback arc using no temp powers.",
    links: [
        {title: "Diminished Badge", href: "https://paragonwiki.com/wiki/Diminished_Badge"}
    ],
    imageKeys: [{value: "core.ouroboros.diminished"}]
};
