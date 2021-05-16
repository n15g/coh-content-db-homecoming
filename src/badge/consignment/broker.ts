import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Broker: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "broker",
    setTitleId: 806,
    names: [
        {value: "Broker"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've sold 50 Recipes on the Consignment House.`},
        {type: Alternate.V, value: `You've sold 50 Recipes on the Black Market.`}
    ],
    acquisition: "Sell 50 Recipes at either Wentworths or the Black Market.",
    links: [
        {title: "Broker Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Broker_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/broker-v.png"}
    ]
};
