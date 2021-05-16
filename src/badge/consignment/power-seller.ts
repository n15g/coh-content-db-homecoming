import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const PowerSeller: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "power-seller",
    setTitleId: 821,
    names: [
        {value: "Power Seller"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've sold 7000 items on the Consignment House.`},
        {type: Alternate.V, value: `You've sold 7000 items on the Black Market.`}
    ],
    acquisition: "7000 total sales of any kind on the consignment houses.",
    links: [
        {title: "Power Seller Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Power_Seller_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/power-seller.png"}]
};
