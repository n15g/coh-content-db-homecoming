import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Disruptor: IBadgeData = {
    type: BadgeType.PVP,
    key: "disruptor",
    setTitleId: 366,
    names: [
        {value: "Disruptor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've achieved a PvP Reputation of 400."}
    ],
    acquisition: "Achieve 50 kills in a PvP zone",
    links: [
        {title: "Disruptor Badge", href: "https://paragonwiki.com/wiki/Disruptor_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pvp-defeats.png"}
    ],
};