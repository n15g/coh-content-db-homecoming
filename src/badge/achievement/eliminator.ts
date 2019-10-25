import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Eliminator: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "eliminator",
    setTitleId: 2356,
    names: [
        {value: "Eliminator"}
    ],
    alignment: ALIGNMENT_ANY,
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png"}
    ],
    badgeText: [
        {value: "You have inflicted five hundred thousand points of damage upon your foes."}
    ],
    acquisition: "Deal 500,000 damage to earn this badge.",
    links: [
        {title: "Eliminator Badge", href: "https://paragonwiki.com/wiki/Eliminator_Badge"}
    ],
};
