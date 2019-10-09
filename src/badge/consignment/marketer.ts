import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Marketer: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "marketer",
    names: [
        {type: Alternate.H, value: "Marketer"},
        {type: Alternate.V, value: "Black Marketeer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 5000 items on the Auction House."},
    ],
    acquisition: "5000 total sales of any kind on the consignment houses.",
    links: [
        {title: "Marketer Badge", href: "https://paragonwiki.com/wiki/Marketer_Badge"},
        {title: "Black Marketeer Badge", href: "https://paragonwiki.com/wiki/Black_Marketeer"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/marketer.png"}]
};
