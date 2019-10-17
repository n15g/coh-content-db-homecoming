import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Frontline: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "frontline",
    names: [
        {value: "Frontline"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You stopped a battle between the Circle of Thorns and the Oranbegans from another dimension."}
    ],
    acquisition: "Complete the Stop the Circle of Thorns from contacting an alternate world mission from Cadao Kestrel",
    links: [
        {title: "Frontline Badge", href: "https://paragonwiki.com/wiki/Frontline_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/frontline.png"}
    ],
};