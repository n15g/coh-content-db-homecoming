import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const WarTorn: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "war-torn",
    setTitleId: 2332,
    names: [
        {value: "War Torn"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `You have torn the Council War Walkers into scrap metal.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/council-war-walker.png"}],
    acquisition: "Defeat 100 Council War Walkers in Boomtown",
    links: [
        {title: "War Torn Badge", href: "https://homecoming.wiki/wiki/War_Torn_Badge"}
    ],
};
