import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const TheThiefOfMidnight: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "the-thief-of-midnight",
    setTitleId: 986,
    names: [
        {value: "The Thief of Midnight"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Only you and Darrin Wade will ever know what you took from the Midnight Squad. Even now they " +
        "believe the artifacts they look upon with such reverence to be authentic."}
    ],
    acquisition: "Complete the Midnight Draws Near story arc from Darrin Wade",
    links: [
        {title: "The Thief of Midnight Badge", href: "https://paragonwiki.com/wiki/The_Thief_of_Midnight_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-thief-of-midnight.png"}
    ],
};