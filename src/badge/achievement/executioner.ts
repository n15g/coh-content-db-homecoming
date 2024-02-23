import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Executioner: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "executioner",
    setTitleId: 2346,
    names: [
        {value: "Executioner"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You have inflicted twenty five million points of damage upon your foes.`}],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png"}
    ],
    acquisition: "Deal 25,000,000 damage to earn this badge",
    links: [
        {title: "Executioner Badge", href: "https://homecoming.wiki/wiki/Executioner_Badge"}
    ],
};
