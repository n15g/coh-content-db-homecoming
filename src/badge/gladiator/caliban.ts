import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Caliban: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "caliban",
    setTitleId: 481,
    names: [
        {value: "Caliban"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The Trolls respect your might."}
    ],
    acquisition: "Earn the [badge:regenerator] Badge (Trolls)",
    links: [
        {title: "Caliban Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Caliban_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
