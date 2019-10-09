import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Fearless: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "fearless",
    names: [
        {value: "Fearless"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 25 and 29 while the enemies were Buffed."},
    ],
    acquisition: "Complete a level 25-29 Flashback arc with enemies buffed.",
    links: [
        {title: "Fearless Badge", href: "https://paragonwiki.com/wiki/Fearless_Badge"}
    ],
    icons: [{value: "core.ouroboros.fearless"}]
};
