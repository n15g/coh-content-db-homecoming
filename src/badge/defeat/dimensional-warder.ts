import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const DimensionalWarder: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "dimensional-warder",
    setTitleId: 57,
    names: [
        {value: "Dimensional Warder"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have made yourself legend by defeating the Praetorians, an evil version of the Freedom " +
        "Phalanx from an alternate dimension."}
    ],
    acquisition: "Defeat all fifteen Praetorian Archvillains",
    links: [
        {title: "Dimensional Warder Badge", href: "https://paragonwiki.com/wiki/Dimensional_Warder_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/praetorians.png"}
    ],
};