import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Peddler: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "peddler",
    setTitleId: 814,
    names: [
        {value: "Peddler"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've sold 500 items on the Consignment House.`},
        {type: Alternate.V, value: `You've sold 500 items on the Black Market.`}
    ],
    acquisition: "500 total sales of any kind on the consignment houses.",
    links: [
        {title: "Peddler Badge", href: "https://homecoming.wiki/wiki/Peddler_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/peddler.png"}]
};
