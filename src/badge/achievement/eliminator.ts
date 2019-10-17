import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Eliminator: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "eliminator",
    setTitleId: 2356,
    names: [
        {value: "Eliminator"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have inflicted five hundred thousand points of damage upon your foes."}
    ],
    acquisition: "Deal 500,000 damage to earn this badge.",
    links: [
        {title: "Eliminator Badge", href: "https://paragonwiki.com/wiki/Eliminator_Badge"}
    ],
};
