import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const WarMachine: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "war-machine",
    setTitleId: 2333,
    names: [
        {value: "War Machine"}
    ],
    alignment: ALIGNMENT_HERO,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/council-war-walker.png"}],
    badgeText: [
        {value: "The Council Goliath War Walker was no match for you."}
    ],
    acquisition: "Defeat the Council War Walker in Boomtown",
    links: [
        {title: "War Machine Badge", href: "https://hcwiki.cityofheroes.dev/wiki/War_Machine_Badge"}
    ],
};
