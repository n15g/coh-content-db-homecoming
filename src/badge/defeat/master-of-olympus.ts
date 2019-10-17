import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfOlympus: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "master-of-olympus",
    setTitleId: 60,
    names: [
        {type: Alternate.M, value: "Master of Olympus"},
        {type: Alternate.F, value: "Mistress of Olympus"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You have destroyed the Kronos Titan, showing Malta that the Heroes of Paragon City defend " +
        "their turf."},
        {type: Alternate.V, value: "You have destroyed the Kronos Titan, showing Malta that you are a force to be reckoned with."}
    ],
    acquisition: "Defeat Kronos Class Titan, a monster in an ambush in a Crimson mission",
    links: [
        {title: "Master of Olympus Badge", href: "https://paragonwiki.com/wiki/Master_of_Olympus_Badge"},
        {title: "Mistress of Olympus Badge", href: "https://paragonwiki.com/wiki/Mistress_of_Olympus_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/malta.png"}
    ],
};