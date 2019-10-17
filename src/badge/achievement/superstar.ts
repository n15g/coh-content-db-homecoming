import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Superstar: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "superstar",
    setTitleId: 7,
    names: [
        {type: Alternate.H, value: "Superstar"},
        {type: Alternate.V, value: "Midas Touch"},
        {type: Alternate.P, value: "Illustrious"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "The citizens of Paragon City have begun a petition to make a statue in your name."},
        {type: Alternate.V, value: "Every job you take seems to turn to gold. You've earned over ten million Infamy."},
        {type: Alternate.P, value: "You've pieced together from bits of information that word of your exploits is spreading back " +
        "to Praetoria in hushed whispers and classified reports."}
    ],
    acquisition: "Earn 10,000,000 influence",
    links: [
        {title: "Superstar Badge", href: "https://paragonwiki.com/wiki/Superstar_Badge"},
        {title: "Midas Touch Badge", href: "https://paragonwiki.com/wiki/Midas_Touch_Badge"},
        {title: "Illustrious Badge", href: "https://paragonwiki.com/wiki/Illustrious_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png"}
    ],
};