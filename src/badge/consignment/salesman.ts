import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Salesman: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "salesman",
    names: [
        {type: Alternate.M, value: "Salesman"},
        {type: Alternate.F, value: "Saleswoman"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 50 items on the Auction House."},
    ],
    acquisition: "50 total sales of any kind on the consignment houses.",
    links: [
        {title: "Salesman Badge", href: "https://paragonwiki.com/wiki/Salesman_Badge"},
        {title: "Saleswoman Badge", href: "https://paragonwiki.com/wiki/Saleswoman_Badge"}
    ],
    imageKeys: [{value: "core.consignment.salesman"}]
};
