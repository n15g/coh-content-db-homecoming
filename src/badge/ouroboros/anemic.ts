import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Anemic: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "anemic",
    names: [
        {value: "Anemic"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 20 and 24 while not gaining bonuses from slotted Enhancements."},
    ],
    acquisition: "Complete a level 20-24 Flashback arc using no enhancements.",
    links: [
        {title: "Anemic Badge", href: "https://paragonwiki.com/wiki/Anemic_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/anemic.png"}]
};
