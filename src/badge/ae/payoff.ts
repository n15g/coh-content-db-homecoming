import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Payoff: IBadgeData = {
    type: BadgeType.AE,
    key: "payoff",
    names: [
        {value: "Payoff"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "I spent 1000 Mission Architect tickets and all I got was this stupid badge!"}],
    acquisition: "Purchase from the ticket vendor.",
    links: [
        {title: "Payoff Badge", href: "https://paragonwiki.com/wiki/Payoff_Badge"}
    ],
    imageKeys: [{value: "core.ae.payoff"}]
};
