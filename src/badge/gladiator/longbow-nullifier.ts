import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const LongbowNullifier: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "longbow-nullifier",
    setTitleId: 459,
    names: [
        {value: "Longbow Nullifier"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "These fools are wise to obey you."}
    ],
    acquisition: "Earn the [badge:lanista] Badge (Longbow)",
    links: [
        {title: "Longbow Nullifier Badge", href: "https://paragonwiki.com/wiki/Longbow_Nullifier_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};