import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Paragon: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "paragon",
    setTitleId: 14,
    setTitleIdPraetorian: 1707,
    names: [
        {type: Alternate.H, value: "Paragon"},
        {type: Alternate.V, value: "Svengali"},
        {type: Alternate.P, value: "Teacher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "The time spent as a mentor has earned you the right to call yourself paragon."},
        {type: Alternate.V, value: "You've spent time recruiting others to Arachnos' cause."},
        {
            type: Alternate.P, value: "Teaching those who want to learn the ways of Praetoria is more than a hobby to you. It's a " +
                "mission."
        }
    ],
    acquisition: "Sidekick another hero for 12 hours",
    links: [
        {title: "Paragon Badge", href: "https://homecoming.wiki/wiki/Paragon_Badge"},
        {title: "Svengali Badge", href: "https://homecoming.wiki/wiki/Svengali_Badge"},
        {title: "Teacher Badge", href: "https://homecoming.wiki/wiki/Teacher_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png"}
    ],
};
