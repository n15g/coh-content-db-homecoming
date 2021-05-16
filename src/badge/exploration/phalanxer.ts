import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Boomtown} from "../../map/boomtown";

export const Phalanxer: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "phalanxer",
    setTitleId: 114,
    names: [{value: "Phalanxer"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Boomtown.key,
    location: [-2002.0, -16.0, 5180.0],
    badgeText: [{value: "Before Baumton had its 'accident,' the Freedom Phalanx called this building home."}],
    notes: "The Phalanxer Badge is located in The Fuse neighborhood of Boomtown. It is located at the northeast corner of a building just northeast of the Steel Canyon entrance to the zone." +
        "\n\nThe badge marker is approximately 230 yards northeast of the entrance.",
    links: [
        {title: "Phalanxer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Phalanxer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "1"
};
