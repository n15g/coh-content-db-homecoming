import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfTheMagisterium: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-magisterium",
    setTitleId: 2225,
    names: [
        {value: "Master of the Magisterium"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have mastered the Incarnate Trial: Magisterium."}
    ],
    acquisition: "Earn the Triple Threat, Ready to Rumble, Shadow Master, and The Hard Way badges",
    links: [
        {title: "Master of the Magisterium Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Master_of_the_Magisterium_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-magisterium.png"}
    ],
};
