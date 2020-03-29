import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Jailed: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "jailed",
    setTitleId: 241,
    setTitleIdPraetorian: 1698,
    names: [
        {value: "Jailed"},
        {type: Alternate.P, value: "Lagged"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Enemies no longer regard you as a threat."},
        {type: Alternate.P, value: "You've spent so much time held, slept, immobilized, encased in goo, et cetera, that it now " +
        "seems to take you two seconds to do something it takes others only one. Perhaps you should see " +
        "someone about it?"}
    ],
    acquisition: "Be held for 12 hours",
    links: [
        {title: "Jailed Badge", href: "https://paragonwiki.com/wiki/Jailed_Badge"},
        {title: "Lagged Badge", href: "https://paragonwiki.com/wiki/Lagged_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png"}
    ],
};
