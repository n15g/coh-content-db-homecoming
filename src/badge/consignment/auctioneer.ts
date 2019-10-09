import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Auctioneer: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "auctioneer",
    names: [
        {value: "Auctioneer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 3000 items on the Auction House."},
    ],
    acquisition: "3000 total sales of any kind on the consignment houses.",
    links: [
        {title: "Auctioneer Badge", href: "https://paragonwiki.com/wiki/Auctioneer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/auctioneer.png"}]
};
