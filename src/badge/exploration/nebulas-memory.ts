import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {PerezPark} from "../../map/perez-park";

export const NebulasMemory: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "nebulas-memory",
    setTitleId: 1774,
    names: [{value: "Nebula's Memory"}],
    alignment: ALIGNMENT_HERO,
    mapKey: PerezPark.key,
    location: [-1453.0, -29.0, 2990.0],
    badgeText: [{
        value: "This statue is all that remains of a novice heroine by the name of Nebula who lost her life saving those of others when the Rikti overran Perez Park." +
            " Some have witnessed a lone hero brave the dangers of Perez Park to sit in quiet contemplation at the benches near her statue." +
            " This hero's identity and the nature of his relationship with Nebula remains a tantalizing mystery."
    }],
    notes: "Located in [map:perez-park] 82 yards east of the Everett Lake marker on the map, beneath the statue of Nebula herself.",
    links: [
        {title: "Nebula's Memory Badge", href: "https://paragonwiki.com/wiki/Nebula%27s_Memory_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "6"
};
