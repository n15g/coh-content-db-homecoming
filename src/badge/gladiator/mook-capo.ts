import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const MookCapo: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "mook-capo",
    names: [
        {value: "Mook Capo"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Da Mooks are on your side."}
    ],
    acquisition: "Earn the [badge:stone-cold] Badge (Mooks)",
    links: [
        {title: "Mook Capo Badge", href: "https://paragonwiki.com/wiki/Mook_Capo_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};