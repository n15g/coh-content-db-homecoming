import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Tarantula: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "tarantula",
    setTitleId: 446,
    names: [
        {value: "Tarantula"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Who can say what motivates these creations?"}
    ],
    acquisition: "Earn the [badge:venomous] Badge (Arachnos)",
    links: [
        {title: "Tarantula Badge", href: "https://homecoming.wiki/wiki/Tarantula_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
