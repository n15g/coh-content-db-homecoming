import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const AboveTheLaw: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "above-the-law",
    setTitleId: 1451,
    names: [
        {value: "Above the Law"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You are the law, you dispense your own kind of justice for the greater good. You have " +
        "completed a Vigilante Morality Mission earning yourself this badge."}
    ],
    acquisition: "Complete a Vigilante Morality mission",
    links: [
        {title: "Above the Law Badge", href: "https://paragonwiki.com/wiki/Above_the_Law_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/above-the-law.png"}
    ],
};