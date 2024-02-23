import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const NighIndestructible: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "nigh-indestructible",
    setTitleId: 230,
    setTitleIdPraetorian: 1678,
    names: [
        {value: "Nigh Indestructible"},
        {type: Alternate.P, value: "Concussed"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have proven yourself Indestructible. You have survived twenty five million points of " +
                "damage."
        },
        {
            type: Alternate.P, value: "At some point, your ability to take a pounding may lead to delusions of grandeur. Well, are " +
                "they really delusions if they're true?"
        }
    ],
    acquisition: "Endure 25,000,000 points of damage",
    links: [
        {title: "Nigh Indestructible Badge", href: "https://homecoming.wiki/wiki/Nigh_Indestructible_Badge"},
        {title: "Concussed Badge", href: "https://homecoming.wiki/wiki/Concussed_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png"}
    ],
};
