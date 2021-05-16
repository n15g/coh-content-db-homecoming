import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Dealer: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "dealer",
    setTitleId: 816,
    names: [
        {value: "Dealer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've sold 2000 items on the Consignment House.`},
        {type: Alternate.V, value: `You've sold 2000 items on the Black Market.`}
    ],
    acquisition: "2000 total sales of any kind on the consignment houses.",
    links: [
        {title: "Dealer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Dealer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/dealer.png"}]
};
