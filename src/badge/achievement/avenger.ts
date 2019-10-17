import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Avenger: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "avenger",
    names: [
        {value: "Avenger"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "When the law fails to serve us, we must serve as the law."}
    ],
    acquisition: "Kill Rider in the story arc `Dirty Work` from Shauna Braun (Level 25-29, Arc 26.01 in Ouro, Vigilante)",
    links: [
        {title: "Avenger Badge", href: "https://paragonwiki.com/wiki/Avenger_Badge"}
    ],
};
