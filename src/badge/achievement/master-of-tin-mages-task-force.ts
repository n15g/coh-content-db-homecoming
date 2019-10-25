import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfTinMagesTaskForce: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-tin-mages-task-force",
    setTitleId: 1940,
    names: [
        {value: "Master of Tin Mage's Task Force"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have gone through the Alpha and the Omega of Tin Mage's Task Force."}
    ],
    acquisition: "Earn the Hacker, Midnight Dodger What Dodges at Midnight, Kitty's Got Claws, and Army of Neu badges",
    links: [
        {title: "Master of Tin Mage's Task Force Badge", href: "https://paragonwiki.com/wiki/Master_of_Tin_Mage%27s_Task_Force_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-tin-mages-task-force.png"}
    ],
};