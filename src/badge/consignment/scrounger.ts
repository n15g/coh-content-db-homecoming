import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Scrounger: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "scrounger",
    names: [
        {value: "Scrounger"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 50 Salvage on the Auction House."},
    ],
    acquisition: "Sell 50 Salvage at either Wentworths or the Black Market.",
    links: [
        {title: "Scrounger Badge", href: "https://paragonwiki.com/wiki/Scrounger_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-v.png"}
    ]
};
