import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const TheUnbrokenSpirit: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "the-unbroken-spirit",
    setTitleId: 17,
    setTitleIdPraetorian: 1683,
    names: [
        {value: "The Unbroken Spirit"},
        {type: Alternate.P, value: "Undaunted"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Your spirit can not be shattered. Though you have often been defeated, you continue to fight " +
        "the good fight."},
        {type: Alternate.V, value: "Those lousy heroes win a lot of battles, but the war ain't over yet."},
        {type: Alternate.P, value: "You remain Undaunted by defeat. You're not even sure Praetoria had any daunts..."}
    ],
    acquisition: "Pay off 200,000 debt",
    links: [
        {title: "The Unbroken Spirit Badge", href: "https://paragonwiki.com/wiki/The_Unbroken_Spirit_Badge"},
        {title: "Undaunted Badge", href: "https://paragonwiki.com/wiki/Undaunted_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png"}
    ],
};
