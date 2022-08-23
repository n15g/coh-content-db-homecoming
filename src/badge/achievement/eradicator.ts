import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Eradicator: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "eradicator",
    setTitleId: 2359,
    names: [
        {value: "Eradicator"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You have inflicted fifty million points of damage upon your foes.`}],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png"}
    ],
    acquisition: "Deal 50,000,000 damage to earn this badge",
    links: [
        {title: "Eradicator Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Eradicator_Badge"}
    ],
};
