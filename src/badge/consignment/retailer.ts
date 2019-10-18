import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Retailer: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "retailer",
    names: [
        {value: "Retailer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 1000 items on the Auction House."},
    ],
    acquisition: "1000 total sales of any kind on the consignment houses.",
    links: [
        {title: "Retailer Badge", href: "https://paragonwiki.com/wiki/Retailer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/retailer.png"}]
};