import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Merchant: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "merchant",
    names: [
        {value: "Merchant"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 250 items on the Auction House."},
    ],
    acquisition: "250 total sales of any kind on the consignment houses.",
    links: [
        {title: "Merchant Badge", href: "https://paragonwiki.com/wiki/Merchant_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/merchant.png"}]
};
