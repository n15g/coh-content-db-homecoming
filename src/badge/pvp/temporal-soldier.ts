import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const TemporalSoldier: IBadgeData = {
    type: BadgeType.PVP,
    key: "temporal-soldier",
    names: [
        {value: "Temporal Soldier"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "250 Heavies have been at your disposal in Recluse's Victory."},
        {type: Alternate.V, value: "250 Heavies have been at your disposal in Recluse's Victory"}
    ],
    acquisition: "Control 50 Heavies in Recluse's Victory",
    links: [
        {title: "Temporal Soldier Badge", href: "https://paragonwiki.com/wiki/Temporal_Soldier_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/temporal-soldier.png"}
    ],
};