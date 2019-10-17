import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const JusticeIncarnate: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "justice-incarnate",
    setTitleId: 24,
    names: [
        {type: Alternate.H, value: "Justice Incarnate"},
        {type: Alternate.V, value: "Captain"},
        {type: Alternate.P, value: "Primal Praetorian"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Positron has awarded you this badge for achieving Security Level 40."},
        {type: Alternate.V, value: "Arachnos has awarded you the Captain Badge for reaching Level 40."},
        {type: Alternate.P, value: "Regardless of the dimension in which you find yourself, your involvement in the affairs of " +
        "Primal and Praetorian Earth has allowed you to establish a well-earned reputation in both " +
        "worlds."}
    ],
    acquisition: "Reach level 40",
    links: [
        {title: "Justice Incarnate Badge", href: "https://paragonwiki.com/wiki/Justice_Incarnate_Badge"},
        {title: "Captain Badge", href: "https://paragonwiki.com/wiki/Captain_Badge"},
        {title: "Primal Praetorian Badge", href: "https://paragonwiki.com/wiki/Primal_Praetorian_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/justice-incarnate-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/justice-incarnate-v.png"}
    ],
};