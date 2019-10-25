import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Salesman: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "salesman",
    setTitleId: 811,
    names: [
        {type: Alternate.M, value: "Salesman"},
        {type: Alternate.F, value: "Saleswoman"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've sold 50 items on the Consignment House.`},
        {type: Alternate.V, value: `You've sold 50 items on the Black Market.`}
    ],
    acquisition: "50 total sales of any kind on the consignment houses.",
    links: [
        {title: "Salesman Badge", href: "https://paragonwiki.com/wiki/Salesman_Badge"},
        {title: "Saleswoman Badge", href: "https://paragonwiki.com/wiki/Saleswoman_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/salesman.png"}]
};
