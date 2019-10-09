import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Broker: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "broker",
    names: [
        {value: "Broker"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 50 Recipes on the Auction House."},
    ],
    acquisition: "Sell 50 Recipes at either Wentworths or the Black Market.",
    links: [
        {title: "Broker Badge", href: "https://paragonwiki.com/wiki/Broker_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "core.consignment.broker-h"},
        {type: Alternate.V, value: "core.consignment.broker-v"}
    ]
};
