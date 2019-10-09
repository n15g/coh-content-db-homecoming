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
        {type: Alternate.H, value: "core.consignment.broker-h"},
        {type: Alternate.V, value: "core.consignment.broker-v"}
    ]
};
