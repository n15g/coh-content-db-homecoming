import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Rocketman: IBadgeData = {
    type: BadgeType.PVP,
    key: "rocketman",
    setTitleId: 371,
    names: [
        {type: Alternate.M, value: "Rocketman"},
        {type: Alternate.F, value: "Rocketwoman"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Supergroups everywhere quake in fear when you enter Warburg. You've launched the Warburg " +
        "Rocket ten times."}
    ],
    acquisition: "Launch the Warburg rocket ten times",
    links: [
        {title: "Rocketman Badge", href: "https://paragonwiki.com/wiki/Rocketman_Badge"},
        {title: "Rocketwoman Badge", href: "https://paragonwiki.com/wiki/Rocketwoman_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/rocketman.png"}
    ],
};