import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Paradigm: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "paradigm",
    setTitleId: 247,
    setTitleIdPraetorian: 1710,
    names: [
        {value: "Paradigm"},
        {type: Alternate.P, value: "Old-Timer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You are a Paradigm, that which all other heroes aspire to be."},
        {type: Alternate.V, value: "You've spent considerable time as a boss of others."},
        {type: Alternate.P, value: "There's no doubt you've seen it all, and the young pups who look up to you have started " +
        "calling you \"Old-Timer.\" You'll take it as a term of endearment."}
    ],
    acquisition: "Sidekick another hero for 24 hours",
    links: [
        {title: "Paradigm Badge", href: "https://paragonwiki.com/wiki/Paradigm_Badge"},
        {title: "Old-Timer Badge", href: "https://paragonwiki.com/wiki/Old-Timer_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png"}
    ],
};
