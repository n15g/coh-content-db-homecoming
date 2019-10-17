import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Frenzied: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "frenzied",
    names: [
        {value: "Frenzied"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You completed a Villain Morality Mission and then maintained your Villain alignment for 7 days " +
        "earning yourself this badge."}
    ],
    acquisition: "Maintain a Villain alignment for 7 days",
    links: [
        {title: "Frenzied Badge", href: "https://paragonwiki.com/wiki/Frenzied_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/frenzied.png"}
    ],
};