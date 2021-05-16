import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Vendor: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "vendor",
    setTitleId: 810,
    names: [
        {value: "Vendor"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've sold 10 items on the Consignment House.`},
        {type: Alternate.V, value: `You've sold 10 items on the Black Market.`}
    ],
    acquisition: "10 total sales of any kind on the consignment houses.",
    links: [
        {title: "Vendor Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Vendor_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/vendor.png"}]
};
