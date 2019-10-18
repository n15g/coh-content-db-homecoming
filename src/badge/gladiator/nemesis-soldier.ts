import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const NemesisSoldier: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "nemesis-soldier",
    names: [
        {value: "Nemesis Soldier"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have a robotic warrior for the games."}
    ],
    acquisition: "Earn the [badge:corrupter] Badge (Nemesis)",
    links: [
        {title: "Nemesis Soldier Badge", href: "https://paragonwiki.com/wiki/Nemesis_Soldier_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};