import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Retailer: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "retailer",
    setTitleId: 815,
    names: [
        {value: "Retailer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've sold 1000 items on the Consignment House.`},
        {type: Alternate.V, value: `You've sold 1000 items on the Black Market.`}
    ],
    acquisition: "1000 total sales of any kind on the consignment houses.",
    links: [
        {title: "Retailer Badge", href: "https://homecoming.wiki/wiki/Retailer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/retailer.png"}]
};
