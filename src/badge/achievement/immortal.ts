import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Immortal: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "immortal",
    setTitleId: 232,
    names: [
        {value: "Immortal"},
        {type: Alternate.P, value: "Challenger of Gods"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You are truly Immortal. You have survived one hundred million points of damage."},
        {type: Alternate.P, value: "You're not even sure Emperor Cole has taken as much damage as you. Remember to ask him next " +
        "time you see him."}
    ],
    acquisition: "Endure 100,000,000 points of damage",
    links: [
        {title: "Immortal Badge", href: "https://paragonwiki.com/wiki/Immortal_Badge"},
        {title: "Challenger of Gods Badge", href: "https://paragonwiki.com/wiki/Challenger_of_Gods_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png"}
    ],
};