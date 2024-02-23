import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Merchant: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "merchant",
    setTitleId: 813,
    names: [
        {value: "Merchant"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've sold 250 items on the Consignment House.`},
        {type: Alternate.V, value: `You've sold 250 items on the Black Market.`}
    ],
    acquisition: "250 total sales of any kind on the consignment houses.",
    links: [
        {title: "Merchant Badge", href: "https://homecoming.wiki/wiki/Merchant_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/merchant.png"}]
};
