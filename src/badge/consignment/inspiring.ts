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
    imageKeys: [
        {type: Alternate.H, value: "core.consignment.broker-h"},
        {type: Alternate.V, value: "core.consignment.broker-v"}
    ]
};
