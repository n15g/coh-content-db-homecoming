import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ResistanceIsFutile: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "resistance-is-futile",
    setTitleId: 1471,
    names: [
        {value: "Resistance is Futile"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "The Resistance considers you an obstacle to accomplishing their goal of overthrowing Emperor " +
                "Cole. You defeated a number of Resistance members to earn this badge."
        }
    ],
    acquisition: "Defeat 100 points worth of The Resistance",
    links: [
        {title: "Resistance is Futile Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Resistance_Is_Futile_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/resistance-is-futile.png"}
    ],
};
