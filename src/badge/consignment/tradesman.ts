import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Tradesman: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "tradesman",
    names: [
        {type: Alternate.M, value: "Tradesman"},
        {type: Alternate.F, value: "Tradeswoman"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 100 items on the Auction House."},
    ],
    acquisition: "100 total sales of any kind on the consignment houses.",
    links: [
        {title: "Tradesman Badge", href: "https://paragonwiki.com/wiki/Tradesman_Badge"},
        {title: "Tradeswoman Badge", href: "https://paragonwiki.com/wiki/Tradeswoman_Badge"}
    ],
    imageKeys: [{value: "core.consignment.tradesman"}]
};
