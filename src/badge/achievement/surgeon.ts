import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Surgeon: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "surgeon",
    setTitleId: 3,
    names: [
        {type: Alternate.H, value: "Surgeon"},
        {type: Alternate.V, value: "Doc"},
        {type: Alternate.P, value: "Safekeeper"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You have helped your fellow heroes by healing them for one million hit points."},
        {type: Alternate.V, value: "You've healed one million points of damage. Your teammates often call you 'Doc.'"},
        {type: Alternate.P, value: "By healing you keep safe those who would help you achieve your goals. You certainly have your " +
        "priorities straight."}
    ],
    acquisition: "Heal others for 1,000,000 hit points",
    links: [
        {title: "Surgeon Badge", href: "https://paragonwiki.com/wiki/Surgeon_Badge"},
        {title: "Doc Badge", href: "https://paragonwiki.com/wiki/Doc_Badge"},
        {title: "Safekeeper Badge", href: "https://paragonwiki.com/wiki/Safekeeper_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png"}
    ],
};