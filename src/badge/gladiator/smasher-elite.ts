import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SmasherElite: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "smasher-elite",
    setTitleId: 493,
    names: [
        {value: "Smasher Elite"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The Warriors respect those who fight."}
    ],
    acquisition: "Earn the [badge:legionnaire] Badge (Warriors)",
    links: [
        {title: "Smasher Elite Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Smasher_Elite_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
