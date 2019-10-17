import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ShadowMaster: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "shadow-master",
    setTitleId: 2223,
    names: [
        {value: "Shadow Master"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Though Black Swan attempted to tear open the barrier between Shadow Earth and Praetoria, you " +
        "stopped her shadowy suffusion before it could overwhelm your League and stain your souls.  You " +
        "are a true Shadow Master."}
    ],
    acquisition: "Never allow Black Swan to open all six Shadow Rifts simultaneously in the Magisterium Trial",
    links: [
        {title: "Shadow Master Badge", href: "https://paragonwiki.com/wiki/Shadow_Master_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/magisterium-3.png"}
    ],
};