import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Promethean: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "promethean",
    setTitleId: 1982,
    names: [
        {value: "Promethean"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "You manipulated Mortimer Kal into helping you acquire some of the Flames of Prometheus from " +
                "Positron!"
        }
    ],
    acquisition: "Complete the Mortimer Kal Strike Force",
    links: [
        {title: "Promethean Badge", href: "https://homecoming.wiki/wiki/Promethean_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/promethean.png"}
    ],
};
