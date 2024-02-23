import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const ColumnBreaker: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "column-breaker",
    setTitleId: 1293,
    names: [
        {value: "Column Breaker"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "Even though Reichsman managed to escape, you know you've stopped his plans to form an " +
                "unstoppable allegiance of evil."
        }
    ],
    acquisition: "Complete the Dr. Kahn Task Force: Return of the Reichsman",
    links: [
        {title: "Column Breaker Badge", href: "https://homecoming.wiki/wiki/Column_Breaker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/column-breaker.png"}
    ],
};
