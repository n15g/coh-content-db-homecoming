import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Liberator: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "liberator",
    setTitleId: 68,
    names: [
        {type: Alternate.H, value: "Liberator"},
        {type: Alternate.V, value: "Destroyer of Earth"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have freed the captured heroes, preventing them from becoming Devoured."}
    ],
    acquisition: "Complete the Eden Spire Trial",
    links: [
        {title: "Liberator Badge", href: "https://paragonwiki.com/wiki/Liberator_Badge"},
        {title: "Destroyer of Earth Badge", href: "https://paragonwiki.com/wiki/Destroyer_of_Earth_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/trial-1.png"}
    ],
};