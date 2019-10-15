import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const ResearchAssistant: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "research-assistant",
    setTitleId: 500,
    names: [
        {value: "Research Assistant"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "Crey will study the results of your gladiator battles."}
    ],
    acquisition: "Earn the [badge:crey-havoc] Badge (Crey)",
    links: [
        {title: "Research Assistant Badge", href: "https://paragonwiki.com/wiki/Research_Assistant_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
