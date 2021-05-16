import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Tough: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "tough",
    setTitleId: 8,
    setTitleIdPraetorian: 1674,
    names: [
        {type: Alternate.H, value: "Tough"},
        {type: Alternate.V, value: "Stoic"},
        {type: Alternate.P, value: "Slammer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H, value: "You have endured one hundred thousand points of damage and are still dauntless in your pursuit " +
                "of justice."
        },
        {type: Alternate.V, value: "Way to take it like a man, tough guy. You've taken one hundred thousand points of damage."},
        {
            type: Alternate.P, value: "You've taken such a beating the Resistance would certainly call you a Slammer. (One who can't " +
                "be slammed)."
        }
    ],
    acquisition: "Endure 100,000 points of damage",
    links: [
        {title: "Tough Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Tough_Badge"},
        {title: "Stoic Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Stoic_Badge"},
        {title: "Slammer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Slammer_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png"}
    ],
};
