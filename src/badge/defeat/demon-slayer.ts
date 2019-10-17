import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const DemonSlayer: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "demon-slayer",
    setTitleId: 41,
    names: [
        {value: "Demon Slayer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You have defeated Baphomet, an evil spirit summoned by the upper echelon of the Circle of " +
        "Thorns to destroy Paragon City."},
        {type: Alternate.V, value: "You have defeated Baphomet, an evil spirit summoned by the upper echelon of the Circle of " +
        "Thorns."}
    ],
    acquisition: "Defeat Baphomet, a villain found in the Faathim the Kind Task Force and an Angus McQueen mission",
    links: [
        {title: "Demon Slayer Badge", href: "https://paragonwiki.com/wiki/Demon_Slayer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/cot.png"}
    ],
};