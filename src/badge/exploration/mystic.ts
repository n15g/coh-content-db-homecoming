import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Brickstown} from "../../map/brickstown";

export const Mystic: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "mystic",
    setTitleId: 136,
    names: [{value: "Mystic"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Brickstown.key,
    location: [-593.0, 32.0, 1378.0],
    badgeText: [{
        value: "This nexus is the intersection of two very minor Ley Lines, almost imperceptible to those without Second Sight."
    }],
    notes: "Located in Seven Gates neighborhood of [map:brickstown]. It can be found 330 yards east of the Crey's Folly exit on top of a circular grated catwalk.",
    links: [
        {title: "Mystic Badge", href: "https://paragonwiki.com/wiki/Mystic_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "1"
};
