import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const BrightestSun: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "brightest-sun",
    setTitleId: 2015,
    names: [
        {value: "Brightest Sun"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You and your friends have uncovered a Praetorian plot in Galaxy City, which may strike closer " +
        "to home than you thought."}
    ],
    acquisition: "Complete the Level 10-14 Ongoing Training story arc from Twinshot",
    links: [
        {title: "Brightest Sun Badge", href: "https://paragonwiki.com/wiki/Brightest_Sun_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brightest-sun.png"}
    ],
};