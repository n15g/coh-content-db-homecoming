import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Auctioneer: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "auctioneer",
    setTitleId: 817,
    names: [
        {value: "Auctioneer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've sold 3000 items on the Consignment House.`},
        {type: Alternate.V, value: `You've sold 3000 items on the Black Market.`}
    ],
    acquisition: "3000 total sales of any kind on the consignment houses.",
    links: [
        {title: "Auctioneer Badge", href: "https://paragonwiki.com/wiki/Auctioneer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/auctioneer.png"}]
};
