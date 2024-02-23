import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const ButtonManGunner: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "button-man-gunner",
    setTitleId: 482,
    names: [
        {value: "Button Man Gunner"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "The Family owes you a favor."}
    ],
    acquisition: "Earn the [badge:keeper-of-peace] Badge (The Family)",
    links: [
        {title: "Button Man Gunner Badge", href: "https://homecoming.wiki/wiki/Button_Man_Gunner_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
