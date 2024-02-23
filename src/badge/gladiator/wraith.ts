import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Wraith: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "wraith",
    setTitleId: 504,
    names: [
        {value: "Wraith"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "The dead will fight for you."}
    ],
    acquisition: "Earn the [badge:haunted] Badge (Croatoa Ghosts)",
    links: [
        {title: "Wraith Badge", href: "https://homecoming.wiki/wiki/Wraith_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
