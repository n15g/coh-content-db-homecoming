import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Tradesman: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "tradesman",
    setTitleId: 812,
    names: [
        {type: Alternate.M, value: "Tradesman"},
        {type: Alternate.F, value: "Tradeswoman"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've sold 100 items on the Consignment House.`},
        {type: Alternate.V, value: `You've sold 100 items on the Black Market.`}
    ],
    acquisition: "100 total sales of any kind on the consignment houses.",
    links: [
        {title: "Tradesman Badge", href: "https://paragonwiki.com/wiki/Tradesman_Badge"},
        {title: "Tradeswoman Badge", href: "https://paragonwiki.com/wiki/Tradeswoman_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/tradesman.png"}]
};
