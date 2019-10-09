import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Audacious: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "audacious",
    names: [
        {value: "Audacious"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 1 and 15 while the enemies were Buffed."},
    ],
    acquisition: "Complete a level 1-15 Flashback arc with enemies buffed.",
    links: [
        {title: "Audacious Badge", href: "https://paragonwiki.com/wiki/Audacious_Badge"}
    ],
    icons: [{value: "core.ouroboros.audacious"}]
};
