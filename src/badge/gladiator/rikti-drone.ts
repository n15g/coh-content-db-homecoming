import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const RiktiDrone: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "rikti-drone",
    setTitleId: 496,
    names: [
        {value: "Rikti Drone"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "This unit has been programmed to serve as your gladiator in the Arena."}
    ],
    acquisition: "Earn the [badge:savant] Badge (Rikti)",
    links: [
        {title: "Rikti Drone Badge", href: "https://homecoming.wiki/wiki/Rikti_Drone_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
