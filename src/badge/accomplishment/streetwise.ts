import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Streetwise: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "streetwise",
    setTitleId: 1443,
    names: [
        {value: "Streetwise"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You completed a Vigilante Alignment Mission earning yourself the Streetwise badge."}
    ],
    acquisition: "Complete a Vigilante Alignment mission",
    links: [
        {title: "Streetwise Badge", href: "https://homecoming.wiki/wiki/Streetwise_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/streetwise.png"}
    ],
};
