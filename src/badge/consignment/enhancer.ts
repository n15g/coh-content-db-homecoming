import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Enhancer: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "enhancer",
    setTitleId: 809,
    names: [
        {value: "Enhancer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've sold 50 Enhancements on the Consignment House.`},
        {type: Alternate.V, value: `You've sold 50 Enhancements on the Black Market.`}
    ],
    acquisition: "Sell 50 Enhancements at either Wentworths or the Black Market.",
    links: [
        {title: "Enhancer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Enhancer_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-v.png"}
    ]
};
