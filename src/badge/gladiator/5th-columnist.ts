import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const _5thColumnist: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "5th-columnist",
    setTitleId: 612,
    names: [
        {value: "5th Columnist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "For having both the 1st and 2nd Anniversary badges on one character, or by defeating the " +
                "Reichsman, you have been granted access to a 5th Column Gladiator!"
        }
    ],
    acquisition: "Earn the [badge:celebrant] and [badge:reveler] badges, or earn the [badge:column-breaker] Badge. (5th Column)",
    links: [
        {title: "5th Columnist Badge", href: "https://homecoming.wiki/wiki/5th_Columnist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
