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
    imageKeys: [
        {type: Alternate.H, value: "core.consignment.broker-h"},
        {type: Alternate.V, value: "core.consignment.broker-v"}
    ]
};
