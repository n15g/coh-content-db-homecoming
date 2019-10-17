import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Agent: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "agent",
    setTitleId: 85,
    names: [
        {value: "Agent"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You wiped out a cell of Marauder's forces right here in Paragon City."}
    ],
    acquisition: "Complete the Eliminate Marauder's Cell mission from Maria Jenkins",
    links: [
        {title: "Agent Badge", href: "https://paragonwiki.com/wiki/Agent_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/agent.png"}
    ],
};