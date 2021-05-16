import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const TheSolution: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "the-solution",
    setTitleId: 44,
    names: [
        {value: "The Solution"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You have bested Jurassik, the personification of the ideals of the Devouring Earth. The world " +
                "sleeps safer at night due to your actions."
        }
    ],
    acquisition: "Defeat Jurassik, a monster that spawns in Crey's Folly",
    links: [
        {title: "The Solution Badge", href: "https://hcwiki.cityofheroes.dev/wiki/The_Solution_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/devouring.png"}
    ],
};
