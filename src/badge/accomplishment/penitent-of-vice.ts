import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const PenitentOfVice: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "penitent-of-vice",
    names: [
        {type: Alternate.H, value: "Penitent of Vice"},
        {type: Alternate.V, value: "Paragon of Vice"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: "Paragon City still remembers the black eye you gave it to impress Arachnos, and won't soon " +
        "forget."},
        {type: Alternate.V, value: "You showed Arachnos how tough you were in Paragon City."}
    ],
    acquisition: "Complete the Defeat all Arachnos Personnel mission from Willy Wheeler",
    links: [
        {title: "Penitent of Vice Badge", href: "https://paragonwiki.com/wiki/Penitent_of_Vice_Badge"},
        {title: "Paragon of Vice Badge", href: "https://paragonwiki.com/wiki/Paragon_of_Vice_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-3.png"}
    ],
};