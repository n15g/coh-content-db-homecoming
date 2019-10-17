import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Interceptor: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "interceptor",
    setTitleId: 644,
    names: [
        {value: "Interceptor"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "You have kept several shipments of illegal weapons off of the streets."},
        {type: Alternate.V, value: "Keeping your competition from getting their hands on more hardware was remarkably prescient."}
    ],
    acquisition: "Stop 10 weapon deal side missions in Safeguard Missions",
    links: [
        {title: "Interceptor Badge", href: "https://paragonwiki.com/wiki/Interceptor_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/interceptor.png"}
    ],
};