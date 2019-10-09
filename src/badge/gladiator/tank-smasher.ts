import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TankSmasher: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "tank-smasher",
    names: [
        {value: "Tank Smasher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "Tank smash!"}],
    acquisition: "Collect the [badge:tank-buster] Badge.",
    links: [
        {title: "Tank Smasher Badge", href: "https://paragonwiki.com/wiki/Tank_Smasher_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}]
};
