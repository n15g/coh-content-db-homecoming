import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Gallant: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "gallant",
    setTitleId: 1450,
    names: [
        {value: "Gallant"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You've proven time and time again that Paragon City can rely on you. You have completed a Hero " +
                "Morality Mission earning yourself this badge."
        }
    ],
    acquisition: "Complete a Hero Morality mission",
    links: [
        {title: "Gallant Badge", href: "https://homecoming.wiki/wiki/Gallant_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/gallant.png"}
    ],
};
