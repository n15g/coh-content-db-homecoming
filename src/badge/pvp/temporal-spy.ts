import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TemporalSpy: IBadgeData = {
    type: BadgeType.PVP,
    key: "temporal-spy",
    setTitleId: 568,
    names: [
        {value: "Temporal Spy"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have commanded 50 Heavies in Recluse's Victory."}
    ],
    acquisition: "Control 25 Heavies in Recluse's Victory",
    links: [
        {title: "Temporal Spy Badge", href: "https://paragonwiki.com/wiki/Temporal_Spy_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/temporal-spy.png"}
    ],
};