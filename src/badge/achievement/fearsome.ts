import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Fearsome: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "fearsome",
    setTitleId: 1455,
    names: [
        {value: "Fearsome"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You completed a Vigilante Morality Mission and then maintained your Vigilante alignment for 7 " +
                "days earning yourself this badge."
        }
    ],
    acquisition: "Maintain a Vigilante alignment for 7 days",
    links: [
        {title: "Fearsome Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Fearsome_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/fearsome.png"}
    ],
};
