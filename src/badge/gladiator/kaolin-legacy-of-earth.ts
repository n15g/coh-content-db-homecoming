import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const KaolinLegacyOfEarth: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "kaolin-legacy-of-earth",
    setTitleId: 466,
    names: [
        {value: "Kaolin Legacy of Earth"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "The Legacy Chain respects you."},
        {type: Alternate.V, value: "The Legacy Chain fears you."}
    ],
    acquisition: "Earn the [badge:collector] Badge (Legacy Chain)",
    links: [
        {title: "Kaolin Legacy of Earth Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Kaolin_Legacy_of_Earth_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
