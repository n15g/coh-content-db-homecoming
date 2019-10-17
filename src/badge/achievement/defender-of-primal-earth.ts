import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DefenderOfPrimalEarth: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "defender-of-primal-earth",
    names: [
        {value: "Defender of Primal Earth"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You took part in repelling Emperor Cole's incursion into Primal Earth."}
    ],
    acquisition: "Earn both the Master of Apex and Master of Tin Mage task force badges",
    links: [
        {title: "Defender of Primal Earth Badge", href: "https://paragonwiki.com/wiki/Defender_of_Primal_Earth_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/defender-of-primal-earth.png"}
    ],
};
