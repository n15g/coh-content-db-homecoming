import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfMagisterium: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-magisterium",
    names: [
        {value: "Master of Magisterium"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have mastered the Incarnate Trial: Magisterium."}
    ],
    acquisition: "Earn the Triple Threat, Ready to Rumble, Shadow Master, and The Hard Way badges",
    links: [
        {title: "Master of Magisterium Badge", href: "https://paragonwiki.com/wiki/Master_of_Magisterium_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-magisterium.png"}
    ],
};