import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Vendor: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "vendor",
    names: [
        {value: "Vendor"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 10 items on the Auction House."},
    ],
    acquisition: "10 total sales of any kind on the consignment houses.",
    links: [
        {title: "Vendor Badge", href: "https://paragonwiki.com/wiki/Vendor_Badge"}
    ],
    imageKeys: [{value: "core.consignment.vendor"}]
};
