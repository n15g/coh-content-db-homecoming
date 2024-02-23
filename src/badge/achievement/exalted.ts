import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Exalted: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "exalted",
    setTitleId: 235,
    setTitleIdPraetorian: 1686,
    names: [
        {value: "Exalted"},
        {type: Alternate.P, value: "Infinite Lives"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You are truly Exalted and blessed by a higher being."},
        {
            type: Alternate.P, value: "Maybe when you are about to die, Death gets confused and finds another dimension's version of " +
                "you to claim instead. That would explain it."
        }
    ],
    acquisition: "Pay off 1,000,000 debt",
    links: [
        {title: "Exalted Badge", href: "https://homecoming.wiki/wiki/Exalted_Badge"},
        {title: "Infinite Lives Badge", href: "https://homecoming.wiki/wiki/Infinite_Lives_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png"}
    ],
};
