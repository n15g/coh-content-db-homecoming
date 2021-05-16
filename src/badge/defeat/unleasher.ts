import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Unleasher: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "unleasher",
    setTitleId: 181,
    names: [
        {value: "Unleasher"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "The Kraken was unleashed, but your might has put it down for another day."}
    ],
    acquisition: "Defeat the Kraken, a monster that spawns in Perez Park",
    links: [
        {title: "Unleasher Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Unleasher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/unleasher.png"}
    ],
};
