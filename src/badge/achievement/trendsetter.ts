import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Trendsetter: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "trendsetter",
    setTitleId: 242,
    setTitleIdPraetorian: 1702,
    names: [
        {value: "Trendsetter"},
        {type: Alternate.P, value: "Renowned"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "People look to you as a leader."},
        {
            type: Alternate.P, value: "Most citizens of Praetoria have heard your name by now. Rumors abound concerning your " +
                "relationship with the Emperor because of it."
        }
    ],
    acquisition: "Earn 50,000,000 influence",
    links: [
        {title: "Trendsetter Badge", href: "https://homecoming.wiki/wiki/Trendsetter_Badge"},
        {title: "Renowned Badge", href: "https://homecoming.wiki/wiki/Renowned_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png"}
    ],
};
