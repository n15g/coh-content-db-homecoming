import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const LongbowDefender: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "longbow-defender",
    names: [
        {value: "Longbow Defender"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Longbow counts you as an ally."},
        {type: Alternate.V, value: "Even the best of Longbow submit to your will."}
    ],
    acquisition: "Earn the [badge:disruptor] Badge (Longbow)",
    links: [
        {title: "Longbow Defender Badge", href: "https://paragonwiki.com/wiki/Longbow_Warden_2_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
