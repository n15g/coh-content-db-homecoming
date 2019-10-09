import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Enhancer: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "enhancer",
    names: [
        {value: "Enhancer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 50 Enhancements on the Auction House."},
    ],
    acquisition: "Sell 50 Enhancements at either Wentworths or the Black Market.",
    links: [
        {title: "Enhancer Badge", href: "https://paragonwiki.com/wiki/Enhancer_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-v.png"}
    ]
};
