import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Lionhearted: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "lionhearted",
    names: [
        {value: "Lionhearted"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 40 and 45 while the enemies were Buffed."},
    ],
    acquisition: "Complete a level 40-45 Flashback arc with enemies buffed.",
    links: [
        {title: "Lionhearted Badge", href: "https://paragonwiki.com/wiki/Lionhearted_Badge"}
    ],
    icons: [{value: "core.ouroboros.lionhearted"}]
};
