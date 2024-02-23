import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const RedHand: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "red-hand",
    setTitleId: 450,
    names: [
        {value: "Red Hand"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "The spirits of the dead are at your command."}
    ],
    acquisition: "Earn the [badge:spectral] Badge (Spectral Pirates)",
    links: [
        {title: "Red Hand Badge", href: "https://homecoming.wiki/wiki/Red_Hand_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
