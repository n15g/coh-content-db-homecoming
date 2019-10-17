import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Indestructible: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "indestructible",
    setTitleId: 9,
    names: [
        {type: Alternate.H, value: "Indestructible"},
        {type: Alternate.V, value: "Hard Case"},
        {type: Alternate.P, value: "Big Dog"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Over the course of your career, you have taken five hundred thousand points of damage."},
        {type: Alternate.V, value: "You can dish it out, and you can take it. You've soaked over five hundred thousand points of " +
        "damage."},
        {type: Alternate.P, value: "Like a big red punching bag, you take a beating but can't seem to call it quits."}
    ],
    acquisition: "Endure 500,000 points of damage",
    links: [
        {title: "Indestructible Badge", href: "https://paragonwiki.com/wiki/Indestructible_Badge"},
        {title: "Hard Case Badge", href: "https://paragonwiki.com/wiki/Hard_Case_Badge"},
        {title: "Big Dog Badge", href: "https://paragonwiki.com/wiki/Big_Dog_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png"}
    ],
};