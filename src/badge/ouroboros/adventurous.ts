import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Adventurous: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "adventurous",
    names: [
        {value: "Adventurous"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 20 and 24 while under a constant Debuff."},
    ],
    acquisition: "Complete a level 21-25 Flashback story arc while debuffed. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Adventurous Badge", href: "https://paragonwiki.com/wiki/Adventurous_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/adventurous.png"}]
};
