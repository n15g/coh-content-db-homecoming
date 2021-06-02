import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Proprietor: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "proprietor",
    setTitleId: 820,
    names: [
        {value: "Proprietor"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've sold 6000 items on the Consignment House.`},
        {type: Alternate.V, value: `You've sold 6000 items on the Black Market.`}
    ],
    acquisition: "6000 total sales of any kind on the consignment houses.",
    links: [
        {title: "Proprietor Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Proprietor_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/proprietor.png"}]
};
