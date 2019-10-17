import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const WarTorn: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "war-torn",
    names: [
        {value: "War Torn"}
    ],
    alignment: ALIGNMENT_HERO,
    acquisition: "Defeat 100 Council War Walkers in Boomtown",
    links: [
        {title: "War Torn Badge", href: "https://paragonwiki.com/wiki/War_Torn_Badge"}
    ],
};