import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Fungoid: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "fungoid",
    setTitleId: 498,
    names: [
        {value: "Fungoid"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The mushroom men will fight for you."}
    ],
    acquisition: "Earn the [badge:protectorate] Badge (Devouring Earth)",
    links: [
        {title: "Fungoid Badge", href: "https://homecoming.wiki/wiki/Fungoid_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
