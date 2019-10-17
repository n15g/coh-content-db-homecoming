import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const AgentOfDiscord: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "agent-of-discord",
    names: [
        {value: "Agent of Discord"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Obviously, Arachnos isn't as united as Lord Recluse would like the world to believe."}
    ],
    acquisition: "Complete the Take out negotiator and witnesses mission from Operative Kirkland",
    links: [
        {title: "Agent of Discord Badge", href: "https://paragonwiki.com/wiki/Agent_of_Discord_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-5.png"}
    ],
};