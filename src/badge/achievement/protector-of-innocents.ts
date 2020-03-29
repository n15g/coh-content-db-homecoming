import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ProtectorOfInnocents: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "protector-of-innocents",
    setTitleId: 21,
    setTitleIdPraetorian: 1669,
    names: [
        {type: Alternate.H, value: "Protector of Innocents"},
        {type: Alternate.V, value: "Soldier"},
        {type: Alternate.P, value: "Praetorian Professional"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Positron has awarded you this badge for achieving Security Level 10."},
        {type: Alternate.V, value: "Arachnos has awarded you the Soldier Badge for reaching Level 10."},
        {type: Alternate.P, value: "Working your way through the ins-and-outs of Praetoria's political landscape has become second " +
        "nature to you."}
    ],
    acquisition: "Reach level 10",
    links: [
        {title: "Protector of Innocents Badge", href: "https://paragonwiki.com/wiki/Protector_of_Innocents_Badge"},
        {title: "Soldier Badge", href: "https://paragonwiki.com/wiki/Soldier_Badge"},
        {title: "Praetorian Professional Badge", href: "https://paragonwiki.com/wiki/Praetorian_Professional_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/protector-of-innocents-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/protector-of-innocents-v.png"}
    ],
};
