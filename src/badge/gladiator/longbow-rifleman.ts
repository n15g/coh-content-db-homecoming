import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const LongbowRifleman: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "longbow-rifleman",
    setTitleId: 454,
    names: [
        {value: "Longbow Rifleman"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: "Longbow counts you as an ally."},
        {type: Alternate.V, value: "Even Longbow respects your skills."}
    ],
    acquisition: "Earn the [badge:locked-and-loaded] Badge (Longbow)",
    links: [
        {title: "Longbow Rifleman Badge", href: "https://paragonwiki.com/wiki/Longbow_Rifleman_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
