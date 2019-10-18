import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Inspiring: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "inspiring",
    names: [
        {value: "Inspiring"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 50 Inspirations on the Auction House."},
    ],
    acquisition: "Sell 50 Inspirations at either Wentworths or the Black Market.",
    links: [
        {title: "Inspiring Badge", href: "https://paragonwiki.com/wiki/Inspiring_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-v.png"}
    ]
};