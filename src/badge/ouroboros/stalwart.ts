import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Stalwart: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "stalwart",
    names: [
        {value: "Stalwart"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 35 and 39 while the enemies were Buffed."},
    ],
    acquisition: "Complete a level 35-39 Flashback arc with enemies buffed.",
    links: [
        {title: "Stalwart Badge", href: "https://paragonwiki.com/wiki/Stalwart_Badge"}
    ],
    icons: [{value: "core.ouroboros.stalwart"}]
};
