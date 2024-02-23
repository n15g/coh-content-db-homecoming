import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const WebMaster: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "web-master",
    setTitleId: 351,
    names: [
        {value: "Web Master"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H, value: "You are a well-known threat in the chaotic district of Warburg, having spent well over one hour " +
                "fighting Arachnos."
        },
        {
            type: Alternate.V, value: "You are a well-known threat in the chaotic district of Warburg, having spent well over one hour " +
                "fighting Longbow."
        }
    ],
    acquisition: "Spend 1 hour in Warburg",
    links: [
        {title: "Web Master Badge", href: "https://homecoming.wiki/wiki/Web_Master_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png"}
    ],
};
