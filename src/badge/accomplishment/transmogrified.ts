import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Transmogrified: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "transmogrified",
    setTitleId: 67,
    names: [
        {value: "Transmogrified"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You have succeeded in preventing the destruction of the Terra Volta reactor... but at what " +
                "price?"
        }
    ],
    acquisition: "Complete the Terra Volta respec trial and choose the respec reward for the first time",
    links: [
        {title: "Transmogrified Badge", href: "https://homecoming.wiki/wiki/Transmogrified_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/trial-1.png"}
    ],
};
