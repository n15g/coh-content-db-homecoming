import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const EarToTheStreet: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "ear-to-the-street",
    setTitleId: 1442,
    names: [
        {value: "Ear to the Street"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You completed a Hero Alignment Mission earning yourself the Ear to the Street badge."}
    ],
    acquisition: "Complete a Hero Alignment mission",
    links: [
        {title: "Ear to the Street Badge", href: "https://paragonwiki.com/wiki/Ear_to_the_Street_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ear-to-the-street.png"}
    ],
};