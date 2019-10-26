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
    acquisition: "Complete a level 26-30 Flashback story arc with enemies buffed. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Fearless Badge", href: "https://paragonwiki.com/wiki/Fearless_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/fearless.png"}]
};
