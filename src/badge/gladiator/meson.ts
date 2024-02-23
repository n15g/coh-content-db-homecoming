import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Meson: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "meson",
    setTitleId: 505,
    names: [
        {value: "Meson"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "This mighty foe is under your control."}
    ],
    acquisition: "Earn the [badge:dimensional-warder] Badge (Praetorians)",
    links: [
        {title: "Meson Badge", href: "https://homecoming.wiki/wiki/Meson_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
