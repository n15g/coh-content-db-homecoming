import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SteelStrongman: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "steel-strongman",
    setTitleId: 506,
    names: [
        {value: "Steel Strongman"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Might is not match for your right."}
    ],
    acquisition: "Earn the [badge:illusionist] Badge (Carnival of Shadows)",
    links: [
        {title: "Steel Strongman Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Steel_Strongman_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
