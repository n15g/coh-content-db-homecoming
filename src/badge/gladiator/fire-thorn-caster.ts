import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const FireThornCaster: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "fire-thorn-caster",
    setTitleId: 486,
    names: [
        {value: "Fire Thorn Caster"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "The Circle of Thorns fears to disobey you."}
    ],
    acquisition: "Earn the [badge:defender-of-truth] Badge (Circle of Thorns)",
    links: [
        {title: "Fire Thorn Caster Badge", href: "https://homecoming.wiki/wiki/Fire_Thorn_Caster_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
