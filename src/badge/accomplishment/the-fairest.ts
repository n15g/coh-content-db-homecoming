import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const TheFairest: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "the-fairest",
    names: [
        {type: Alternate.H, value: "The Fairest"},
        {type: Alternate.V, value: "Turf Protector"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "Working with the government and your mirror self from another dimension, you stopped your evil " +
        "doppelganger's plans to cause chaos and destruction throughout Paragon."},
        {type: Alternate.V, value: "Working with the government and your mirror self from another dimension, you stopped your evil " +
        "doppelganger's plans to cause chaos and destruction throughout Paragon. That's your turf."}
    ],
    acquisition: "Complete the story arc from Field Agent Keith Nance",
    links: [
        {title: "The Fairest Badge", href: "https://paragonwiki.com/wiki/The_Fairest_Badge"},
        {title: "Turf Protector Badge", href: "https://paragonwiki.com/wiki/Turf_Protector_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-fairest.png"}
    ],
};