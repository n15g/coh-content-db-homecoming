import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const OutcastSlugger: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "outcast-slugger",
    setTitleId: 477,
    names: [
        {value: "Outcast Slugger"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The Outcasts are in awe of you."}
    ],
    acquisition: "Earn the [badge:weatherman] Badge (Outcasts)",
    links: [
        {title: "Outcast Slugger Badge", href: "https://homecoming.wiki/wiki/Outcast_Slugger_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
