import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHive} from "../../map/the-hive";

export const WildAtHeart: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "wild-at-heart",
    names: [{value: "Wild At Heart"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHive.key,
    location: [-1500.0, 0.0, -4491.0],
    badgeText: [{
        value: `In this quiet corner of the Hive, you get a sense of the age and power of the Devouring Earth.
The forest around you feels ancient; you believe the reports that the fauna that spreads in the wake of the Devouring Earth advance are of a species that hasn't graced the planet since mankind's
earliest ancestor scampered through their branches eating fruit and insects.
Even though you understand the threat the Devouring Earth poses, you are taken by the wild beauty of the place.`
    }],
    notes: `Located in [map:${TheHive.key}] 0.76 miles north and a bit west of the Eden transfer point, in an alcove of trees that can be accessed from the southwest side.`,
    links: [
        {title: "Wild At Heart Badge", href: "https://paragonwiki.com/wiki/Wild_At_Heart_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "5"
};
