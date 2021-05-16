import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const WarWallDefender: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "war-wall-defender",
    setTitleId: 79,
    names: [
        {type: Alternate.H, value: "War Wall Defender"},
        {type: Alternate.V, value: "Saboteur"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You foiled a plot to undermine the War Walls that protect Paragon City."}
    ],
    acquisition: "Complete the Rescue the engineers and prevent the Rikti from bringing down the force fields mission from Phillipa Meraux",
    links: [
        {title: "War Wall Defender Badge", href: "https://hcwiki.cityofheroes.dev/wiki/War_Wall_Defender_Badge"},
        {title: "Saboteur Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Saboteur_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/war-wall-defender.png"}
    ],
};
