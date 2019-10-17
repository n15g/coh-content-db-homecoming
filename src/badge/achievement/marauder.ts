import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Marauder: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "marauder",
    setTitleId: 2355,
    names: [
        {value: "Marauder"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have inflicted one hundred thousand points of damage upon your foes."}
    ],
    acquisition: "Deal 100,000 damage to earn this badge.",
    links: [
        {title: "Marauder Badge", href: "https://paragonwiki.com/wiki/Marauder_Badge"}
    ],
};
