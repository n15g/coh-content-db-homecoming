import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const GiftWhichKeepsGiving: IBadgeData = {
    type: BadgeType.EVENT,
    key: "gift-which-keeps-giving",
    setTitleId: 2088,
    names: [
        {value: "Gift Which Keeps Giving"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've passed along the mysterious Duplicating Gift left by the Gamester!"},
    ],
    acquisition: "Give a Duplicating Gift to another player who doesn't already have one during the Winter event.",
    links: [
        {title: "Gift Which Keeps Giving Badge", href: "https://homecoming.wiki/wiki/Gift_Which_Keeps_Giving_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/gift-which-keeps-giving.png"}]
};
