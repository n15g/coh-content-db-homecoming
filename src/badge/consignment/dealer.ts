import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Dealer: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "dealer",
    names: [
        {value: "Dealer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 2000 items on the Auction House."},
    ],
    acquisition: "2000 total sales of any kind on the consignment houses.",
    links: [
        {title: "Dealer Badge", href: "https://paragonwiki.com/wiki/Dealer_Badge"}
    ],
    icons: [{value: "core.consignment.dealer"}]
};
