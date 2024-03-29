import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ColdFront: IBadgeData = {
    type: BadgeType.EVENT,
    key: "cold-front",
    setTitleId: 705,
    names: [
        {value: "Cold Front"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "A winter cold front has been forecast."},
    ],
    acquisition: "Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.",
    links: [
        {title: "Cold Front Badge", href: "https://homecoming.wiki/wiki/Cold_Front_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/cold-front.png"}]
};
