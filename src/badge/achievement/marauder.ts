import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Marauder: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "marauder",
    setTitleId: 2355,
    names: [
        {value: "Marauder"}
    ],
    alignment: ALIGNMENT_ANY,
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png"}
    ],
    badgeText: [
        {value: "You have inflicted one hundred thousand points of damage upon your foes."}
    ],
    acquisition: "Deal 100,000 damage to earn this badge.",
    links: [
        {title: "Marauder Badge", href: "https://paragonwiki.com/wiki/Marauder_Badge"}
    ],
};
