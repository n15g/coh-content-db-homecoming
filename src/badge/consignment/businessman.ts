import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Businessman: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "businessman",
    names: [
        {type: Alternate.M, value: "Businessman"},
        {type: Alternate.F, value: "Businesswoman"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 4000 items on the Auction House."},
    ],
    acquisition: "4000 total sales of any kind on the consignment houses.",
    links: [
        {title: "Businessman Badge", href: "https://paragonwiki.com/wiki/Businessman_Badge"},
        {title: "Businesswoman Badge", href: "https://paragonwiki.com/wiki/Businesswoman_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/businessman.png"}]
};