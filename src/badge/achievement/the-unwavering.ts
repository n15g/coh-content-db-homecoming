import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const TheUnwavering: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "the-unwavering",
    setTitleId: 15,
    setTitleIdPraetorian: 1681,
    names: [
        {type: Alternate.H, value: "The Unwavering"},
        {type: Alternate.V, value: "Punch Drunk"},
        {type: Alternate.P, value: "Repaired"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Though you have been defeated, you continue to fight for Paragon City."},
        {type: Alternate.V, value: "You've suffered a fair number of defeats but keep coming back for more."},
        {type: Alternate.P, value: "If you were just an ordinary Clockwork, you'd probably have been junked by now. But as it is, " +
        "you continue to fight in honor of Praetoria."}
    ],
    acquisition: "Pay off 50,000 debt",
    links: [
        {title: "The Unwavering Badge", href: "https://paragonwiki.com/wiki/The_Unwavering_Badge"},
        {title: "Punch Drunk Badge", href: "https://paragonwiki.com/wiki/Punch_Drunk_Badge"},
        {title: "Repaired Badge", href: "https://paragonwiki.com/wiki/Repaired_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png"}
    ],
};
