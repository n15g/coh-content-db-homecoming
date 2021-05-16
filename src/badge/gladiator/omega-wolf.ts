import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const OmegaWolf: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "omega-wolf",
    setTitleId: 508,
    names: [
        {value: "Omega Wolf"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "This beast is yours in the Arena."}
    ],
    acquisition: "Earn the [badge:the-silver-bullet] Badge (Council)",
    links: [
        {title: "Omega Wolf Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Omega_Wolf_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
