import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Venomous: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "venomous",
    setTitleId: 538,
    names: [
        {value: "Venomous"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've taken down so many Toxic Tarantulas that people call you Venomous."}
    ],
    acquisition: "Defeat 50 Arachnos Toxic Tarantulas",
    links: [
        {title: "Venomous Badge", href: "https://paragonwiki.com/wiki/Venomous_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/arachnos.png"}
    ],
};