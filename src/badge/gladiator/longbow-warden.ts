import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const LongbowWarden: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "longbow-warden",
    setTitleId: 455,
    names: [
        {value: "Longbow Warden"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Longbow counts you as an ally."},
        {type: Alternate.V, value: "Bow down and obey!"}
    ],
    acquisition: "Earn the [badge:politician] Badge (Longbow)",
    links: [
        {title: "Longbow Warden Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Longbow_Warden_1_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
