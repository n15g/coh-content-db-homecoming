import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Invulnerable: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "invulnerable",
    setTitleId: 231,
    setTitleIdPraetorian: 1679,
    names: [
        {value: "Invulnerable"},
        {type: Alternate.P, value: "Marvel of Modern Medicine"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Some call you Invulnerable, based on the fact that you have survived fifty million points of " +
        "damage."},
        {type: Alternate.P, value: "Each day you're stunned at how much punishment you can take. Maybe it was all that Enriche... " +
        "or maybe it was all that Beefy Pop."}
    ],
    acquisition: "Endure 50,000,000 points of damage",
    links: [
        {title: "Invulnerable Badge", href: "https://paragonwiki.com/wiki/Invulnerable_Badge"},
        {title: "Marvel of Modern Medicine Badge", href: "https://paragonwiki.com/wiki/Marvel_of_Modern_Medicine_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png"}
    ],
};
