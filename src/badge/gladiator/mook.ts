import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Mook: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "mook",
    setTitleId: 438,
    names: [
        {value: "Mook"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Dese guys is part of your crew."}
    ],
    acquisition: "Earn the [badge:washed-up] Badge (Mooks)",
    links: [
        {title: "Mook Badge", href: "https://homecoming.wiki/wiki/Mook_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
