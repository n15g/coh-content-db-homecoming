import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Relentless: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "relentless",
    setTitleId: 2357,
    names: [
        {value: "Relentless"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have inflicted one million points of damage upon your foes."}
    ],
    acquisition: "Deal 1,000,000 damage to earn this badge.",
    links: [
        {title: "Relentless Badge", href: "https://paragonwiki.com/wiki/Relentless_Badge"}
    ],
};
