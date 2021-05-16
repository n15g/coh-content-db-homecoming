import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TemporalAgent: IBadgeData = {
    type: BadgeType.PVP,
    key: "temporal-agent",
    setTitleId: 567,
    names: [
        {value: "Temporal Agent"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have controlled 10 Heavies in Recluse's Victory."}
    ],
    acquisition: "Control 10 Heavies in Recluse's Victory",
    links: [
        {title: "Temporal Agent Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Temporal_Agent_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/temporal-agent.png"}
    ],
};
