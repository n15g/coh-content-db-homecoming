import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const PenumbraEliteAdjutant: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "penumbra-elite-adjutant",
    setTitleId: 492,
    names: [
        {value: "Penumbra Elite Adjutant"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You've beat down the Council and now they fear you."}
    ],
    acquisition: "Earn the [badge:super-spy] Badge (Council)",
    links: [
        {title: "Penumbra Elite Adjutant Badge", href: "https://homecoming.wiki/wiki/Penumbra_Elite_Adjutant_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
