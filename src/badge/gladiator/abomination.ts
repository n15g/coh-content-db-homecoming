import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Abomination: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "abomination",
    setTitleId: 479,
    names: [
        {value: "Abomination"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "The Vahzilok fear you."}
    ],
    acquisition: "Earn the [badge:synapses-cohort] Badge (Vahzilok)",
    links: [
        {title: "Abomination Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Abomination_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
