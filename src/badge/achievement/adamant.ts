import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Adamant: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "adamant",
    setTitleId: 10,
    setTitleIdPraetorian: 1676,
    names: [
        {type: Alternate.H, value: "Adamant"},
        {type: Alternate.MV, value: "Ironman"},
        {type: Alternate.FV, value: "Ironwoman"},
        {type: Alternate.P, value: "Laughs it Off"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You have endured one million points of damage."},
        {type: Alternate.V, value: "Never let 'em see you bleed. That's a cool million points of damage."},
        {
            type: Alternate.P, value: "One million damage? Nothing to you, it seems. Though you probably wouldn't want to take it in " +
                "one blow..."
        }
    ],
    acquisition: "Endure 1,000,000 points of damage",
    links: [
        {title: "Adamant Badge", href: "https://homecoming.wiki/wiki/Adamant_Badge"},
        {title: "Ironman Badge", href: "https://homecoming.wiki/wiki/Ironman_Badge"},
        {title: "Ironwoman Badge", href: "https://homecoming.wiki/wiki/Ironwoman_Badge"},
        {title: "Laughs it Off Badge", href: "https://homecoming.wiki/wiki/Laughs_it_Off_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png"}
    ],
};
