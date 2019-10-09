import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Shopkeeper: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "shopkeeper",
    names: [
        {value: "Shopkeeper"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 6000 items on the Auction House."},
    ],
    acquisition: "6000 total sales of any kind on the consignment houses.",
    links: [
        {title: "Shopkeeper Badge", href: "https://paragonwiki.com/wiki/Shopkeeper_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/shopkeeper.png"}]
};
