import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const WarMachine: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "war-machine",
    setTitleId: 2333,
    names: [
        {value: "War Machine"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "The Council Goliath War Walker was no match for you."}
    ],
    acquisition: "Defeat the Council War Walker in Boomtown",
    links: [
        {title: "War Machine Badge", href: "https://paragonwiki.com/wiki/War_Machine_Badge"}
    ],
};
