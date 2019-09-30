import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const PowerSeller: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "power-seller",
    names: [
        {value: "Power Seller"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 7000 items on the Auction House."},
    ],
    acquisition: "7000 total sales of any kind on the consignment houses.",
    links: [
        {title: "Power Seller Badge", href: "https://paragonwiki.com/wiki/Power_Seller_Badge"}
    ],
    imageKeys: [{value: "core.consignment.power-seller"}]
};
