import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const TheUnyielding: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "the-unyielding",
    setTitleId: 16,
    names: [
        {type: Alternate.H, value: "The Unyielding"},
        {type: Alternate.V, value: "Unbroken"},
        {type: Alternate.P, value: "Went the Extra Mile"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Continued defeats mean nothing to you."},
        {type: Alternate.V, value: "They can knock you down, but they can't keep you down."},
        {type: Alternate.P, value: "Because those Hospitals can be pretty far away sometimes... Despite your many, many defeats, " +
        "you press on."}
    ],
    acquisition: "Pay off 100,000 debt",
    links: [
        {title: "The Unyielding Badge", href: "https://paragonwiki.com/wiki/The_Unyielding_Badge"},
        {title: "Unbroken Badge", href: "https://paragonwiki.com/wiki/Unbroken_Badge"},
        {title: "Went the Extra Mile Badge", href: "https://paragonwiki.com/wiki/Went_the_Extra_Mile_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png"}
    ],
};