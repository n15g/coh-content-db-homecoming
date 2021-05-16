import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Marketer: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "marketer",
    setTitleId: 819,
    names: [
        {type: Alternate.H, value: "Marketer"},
        {type: Alternate.V, value: "Black Marketeer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've sold 5000 items on the Consignment House.`},
        {type: Alternate.V, value: `You've sold 5000 items on the Black Market.`}
    ],
    acquisition: "5000 total sales of any kind on the consignment houses.",
    links: [
        {title: "Marketer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Marketer_Badge"},
        {title: "Black Marketeer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Black_Marketeer"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/marketer.png"}]
};
