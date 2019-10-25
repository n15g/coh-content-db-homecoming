import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Gremlin: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "gremlin",
    setTitleId: 447,
    names: [
        {value: "Gremlin"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "This living spark is a capricious sort."}
    ],
    acquisition: "Earn the [badge:electrician] Badge (Cap au Diable Demons)",
    links: [
        {title: "Gremlin Badge", href: "https://paragonwiki.com/wiki/Gremlin_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};