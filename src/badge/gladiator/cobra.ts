import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Cobra: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "cobra",
    setTitleId: 451,
    names: [
        {value: "Cobra"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Sssnakes ssserve you."}
    ],
    acquisition: "Earn the [badge:snake-charmer] Badge (Snakes)",
    links: [
        {title: "Cobra Badge", href: "https://paragonwiki.com/wiki/Cobra_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
