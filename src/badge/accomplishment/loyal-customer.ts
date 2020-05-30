import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const LoyalCustomer: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "loyal-customer",
    setTitleId: 2369,
    names: [
        {value: "Loyal Customer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have stopped the Sky Raiders from ransacking Wentworth's Fine Consignments."}
    ],
    acquisition: "Complete the Market Crash Task Force in Kallisti Warf.",
    links: [
        {title: "Loyal Customer Badge", href: "https://paragonwiki.com/wiki/Loyal_Customer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/loyal-customer.png"}
    ],
};
