import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Devalued: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "devalued",
    names: [
        {value: "Devalued"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 40 and 45 while not gaining bonuses from slotted Enhancements."},
    ],
    acquisition: "Complete a level 41-45 Flashback story arc using no enhancements. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Devalued Badge", href: "https://paragonwiki.com/wiki/Devalued_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/devalued.png"}]
};
