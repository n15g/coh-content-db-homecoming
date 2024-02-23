import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Warhulk: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "warhulk",
    setTitleId: 502,
    names: [
        {value: "Warhulk"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "The Warhulks will fight as your gladiators -- for now."}
    ],
    acquisition: "Earn the [badge:meteorologist] Badge (Nemesis)",
    links: [
        {title: "Warhulk Badge", href: "https://homecoming.wiki/wiki/Warhulk_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
