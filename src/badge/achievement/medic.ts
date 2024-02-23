import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Medic: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "medic",
    setTitleId: 2,
    setTitleIdPraetorian: 1687,
    names: [
        {type: Alternate.H, value: "Medic"},
        {type: Alternate.V, value: "Fixer"},
        {type: Alternate.P, value: "Do-Gooder"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H, value: "You have helped your fellow heroes by healing them for two hundred and fifty thousand hit " +
                "points."
        },
        {
            type: Alternate.V, value: "You've kept the forces of villainy in the fight by healing two hundred and fifty thousand " +
                "points of damage."
        },
        {
            type: Alternate.P, value: "Healing has always seemed to you a good thing. It's easy to lose sight of what's good in " +
                "Praetoria."
        }
    ],
    acquisition: "Heal others for 250,000 hit points",
    links: [
        {title: "Medic Badge", href: "https://homecoming.wiki/wiki/Medic_Badge"},
        {title: "Fixer Badge", href: "https://homecoming.wiki/wiki/Fixer_Badge"},
        {title: "Do Gooder Badge", href: "https://homecoming.wiki/wiki/Do_Gooder_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png"}
    ],
};
