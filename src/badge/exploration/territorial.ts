import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {PerezPark} from "../../map/perez-park";

export const Territorial: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "territorial",
    names: [{value: "Territorial"}],
    alignment: ALIGNMENT_HERO,
    mapKey: PerezPark.key,
    location: [-2015.0, -56.0, 1586.0],
    badgeText: [{
        value: "The territory around this bridge has been hotly contested turf between the Skulls and Hellions for some time now."
    }],
    notes: "Located in [map:perez-park] 44 yards east of the Perez Park neighborhood marker in the maze under the trees.\n" +
        "\n" +
        "To find it, enter the tree maze from the east side almost straight west of the Atlas Park entrance.",
    links: [
        {title: "Territorial Badge", href: "https://paragonwiki.com/wiki/Territorial_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "1"
};
