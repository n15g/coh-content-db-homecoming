import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Cataclysmic: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "cataclysmic",
    setTitleId: 2360,
    names: [
        {value: "Cataclysmic"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You have inflicted one hundred million points of damage upon your foes.`}],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png"}
    ],
    acquisition: "Deal 100,000,000 damage to earn this badge",
    links: [
        {title: "Cataclysmic Badge", href: "https://homecoming.wiki/wiki/Cataclysmic_Badge"}
    ],
};
