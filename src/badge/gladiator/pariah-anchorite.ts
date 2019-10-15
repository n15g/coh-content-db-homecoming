import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const PariahAnchorite: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "pariah-anchorite",
    setTitleId: 499,
    names: [
        {value: "Pariah Anchorite"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "Now the Lost fear your power!"}
    ],
    acquisition: "Earn the [badge:intellectual] Badge (The Lost)",
    links: [
        {title: "Pariah Anchorite Badge", href: "https://paragonwiki.com/wiki/Pariah_Anchorite_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
