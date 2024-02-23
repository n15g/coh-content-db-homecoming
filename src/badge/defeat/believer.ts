import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Believer: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "believer",
    setTitleId: 430,
    names: [
        {value: "Believer"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have defeated the monster in the lake, proving to all that it is real."}
    ],
    acquisition: "Defeat Sally, a monster that spawns in Croatoa, twice",
    links: [
        {title: "Believer Badge", href: "https://homecoming.wiki/wiki/Believer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/believer.png"}
    ],
};
