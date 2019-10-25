import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const HellBane: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "hell-bane",
    setTitleId: 307,
    names: [
        {value: "Hell Bane"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "The demon known as Caleb fell to your powers on Thorn Isle. The creatures of the Abyss have " +
                "taken to calling you Hell Bane."
        }
    ],
    acquisition: "Defeat Caleb, a monster that spawns in Nerva Archipelago",
    links: [
        {title: "Hell Bane Badge", href: "https://paragonwiki.com/wiki/HellBane_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/circle.png"}
    ],
};
