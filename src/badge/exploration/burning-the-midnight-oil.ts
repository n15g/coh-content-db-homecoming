import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {CreysFolly} from "../../map/creys-folly";

export const BurningTheMidnightOil: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "burning-the-midnight-oil",
    setTitleId: 139,
    names: [{value: "Burning the Midnight Oil"}],
    alignment: ALIGNMENT_HERO,
    mapKey: CreysFolly.key,
    location: [840.0, 24.0, 1798.0],
    badgeText: [{
        value: "The United States once held their oil reserves in Paragon City, until the reserves became an attractive target for villains trying to make names for themselves."
    }],
    notes: "Located in [map:creys-folly] on a catwalk 180 yards northwest of the Crey Factories marker.\n" +
        "\n" +
        "It is on the western side of the second silo rising out of the sludge, from left (north) to right (south).",
    links: [
        {title: "Burning the Midnight Oil Badge", href: "https://homecoming.wiki/wiki/Burning_the_Midnight_Oil_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
