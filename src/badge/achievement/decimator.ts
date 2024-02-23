import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Decimator: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "decimator",
    setTitleId: 2358,
    names: [
        {value: "Decimator"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You have inflicted ten million points of damage upon your foes.`}],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png"}
    ],
    acquisition: "Deal 10,000,000 damage to earn this badge",
    links: [
        {title: "Decimator Badge", href: "https://homecoming.wiki/wiki/Decimator_Badge"}
    ],
};
