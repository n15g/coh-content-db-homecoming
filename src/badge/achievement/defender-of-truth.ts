import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const DefenderOfTruth: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "defender-of-truth",
    setTitleId: 23,
    names: [
        {type: Alternate.H, value: "Defender of Truth"},
        {type: Alternate.MV, value: "Wiseguy"},
        {type: Alternate.FV, value: "Wisegal"},
        {type: Alternate.P, value: "Rift Traveler"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Positron has awarded you this badge for achieving Security Level 30."},
        {type: Alternate.V, value: "Arachnos has awarded you the this badge for reaching Level 30."},
        {type: Alternate.P, value: "Whether you have traveled to Primal Earth or delved into the otherworldly secrets of " +
        "Praetoria, you have tested yourself against many new challenges, which has increased your " +
        "skills rapidly. You'll need them."}
    ],
    acquisition: "Reach level 30",
    links: [
        {title: "Defender of Truth Badge", href: "https://paragonwiki.com/wiki/Defender_of_Truth_Badge"},
        {title: "Wiseguy Badge", href: "https://paragonwiki.com/wiki/Wiseguy_Badge"},
        {title: "Wisegal Badge", href: "https://paragonwiki.com/wiki/Wisegal_Badge"},
        {title: "Rift Traveler Badge", href: "https://paragonwiki.com/wiki/Rift_Traveler_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/defender-of-truth-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/defender-of-truth-v.png"}
    ],
};