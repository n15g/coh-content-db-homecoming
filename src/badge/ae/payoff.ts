import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Payoff: IBadgeData = {
    type: BadgeType.AE,
    key: "payoff",
    setTitleId: 1234,
    names: [
        {value: "Payoff"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "I spent 1000 Mission Architect tickets and all I got was this stupid badge!"}],
    acquisition: "Purchase from the ticket vendor.",
    links: [
        {title: "Payoff Badge", href: "https://homecoming.wiki/wiki/Payoff_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/payoff.png"}]
};
