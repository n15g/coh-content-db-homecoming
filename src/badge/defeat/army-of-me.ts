import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const ArmyOfMe: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "army-of-me",
    names: [
        {value: "Army of Me"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You don't understand the math behind it, but you're pretty sure you're equal to or greater " +
        "than eight of yourself."}
    ],
    acquisition: "Complete the mission from Leonard set to defeating eight clones of yourself at the same time",
    links: [
        {title: "Army of Me Badge", href: "https://paragonwiki.com/wiki/Army_of_Me_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/army-of-me.png"}
    ],
};