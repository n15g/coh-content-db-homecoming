import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Unbreakable: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "unbreakable",
    names: [
        {value: "Unbreakable"},
        {type: Alternate.P, value: "Iron Willed"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You are truly unbreakable. You have survived ten million points of damage."},
        {type: Alternate.P, value: "The average Praetorian may suffer from a broken will, but neither your will nor your body can " +
        "be broken."}
    ],
    acquisition: "Endure 10,000,000 points of damage",
    links: [
        {title: "Unbreakable Badge", href: "https://paragonwiki.com/wiki/Unbreakable_Badge"},
        {title: "Iron Willed Badge", href: "https://paragonwiki.com/wiki/Iron_Willed_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png"}
    ],
};