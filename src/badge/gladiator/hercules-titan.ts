import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const HerculesTitan: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "hercules-titan",
    setTitleId: 471,
    names: [
        {value: "Hercules Titan"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have unlocked a mighty Titan for your gladiator team."}
    ],
    acquisition: "Earn the [badge:grand-lanista] Badge (Malta Operatives)",
    links: [
        {title: "Hercules Titan Badge", href: "https://paragonwiki.com/wiki/Hercules_Titan_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};