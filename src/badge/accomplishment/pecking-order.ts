import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const PeckingOrder: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "pecking-order",
    setTitleId: 2498,
    names: [
        {value: "Pecking Order"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You stopped a major technology theft by the Lost, and discovered they have a connection to the Rikti.`}
    ],
    acquisition: `Complete the Stop the Lost attack mission from Eliza Thorpe or Lorenzo Tate`,
    links: [
        {title: "Pecking Order Badge", href: "https://homecoming.wiki/wiki/Pecking_Order_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pecking-order.png"}
    ],
};