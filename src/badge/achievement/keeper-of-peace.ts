import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const KeeperOfPeace: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "keeper-of-peace",
    setTitleId: 22,
    setTitleIdPraetorian: 1670,
    names: [
        {type: Alternate.H, value: "Keeper of Peace"},
        {type: Alternate.V, value: "Insider"},
        {type: Alternate.P, value: "Survivor of Praetoria"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Positron has awarded you this badge for achieving Security Level 20."},
        {type: Alternate.V, value: "Arachnos has awarded you the Insider Badge for reaching Level 20."},
        {type: Alternate.P, value: "Not many last so long in Praetoria as you have managed. Keep up the good work."}
    ],
    acquisition: "Reach level 20",
    links: [
        {title: "Keeper of Peace Badge", href: "https://paragonwiki.com/wiki/Keeper_of_Peace_Badge"},
        {title: "Insider Badge", href: "https://paragonwiki.com/wiki/Insider_Badge"},
        {title: "Survivor of Praetoria Badge", href: "https://paragonwiki.com/wiki/Survivor_of_Praetoria_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/keeper-of-peace-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/keeper-of-peace-v.png"}
    ],
};
