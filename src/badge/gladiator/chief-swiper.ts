import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const ChiefSwiper: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "chief-swiper",
    setTitleId: 483,
    names: [
        {value: "Chief Swiper"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "Freaks just love to fight -- even for you."}
    ],
    acquisition: "Earn the [badge:pwnz] Badge (Freakshow)",
    links: [
        {title: "Chief Swiper Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Chief_Swiper_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
