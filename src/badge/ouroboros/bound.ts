import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Bound: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "bound",
    names: [
        {value: "Bound"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 35 and 39 while not using any Temporary Powers."},
    ],
    acquisition: "Complete a level 35-39 Flashback arc using no temp powers.",
    links: [
        {title: "Bound Badge", href: "https://paragonwiki.com/wiki/Bound_Badge"}
    ],
    imageKeys: [{value: "core.ouroboros.bound"}]
};
