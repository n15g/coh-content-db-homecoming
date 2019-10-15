import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const NightWidow: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "night-widow",
    setTitleId: 444,
    names: [
        {value: "Night Widow"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Night Widows fight for those they deem worthy."}
    ],
    acquisition: "Earn the [badge:wiseguy] Badge (Arachnos)",
    links: [
        {title: "Night Widow Badge", href: "https://paragonwiki.com/wiki/Night_Widow_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
