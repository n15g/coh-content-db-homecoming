import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SewerNetwork} from "../../map/sewer-network";
import {AtlasPark} from "../../map/atlas-park";

export const DownwardBound: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "downward-bound",
    setTitleId: 1834,
    names: [{value: "Downward Bound"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SewerNetwork.key,
    location: [-2756.0, -51.0, 1972.0],
    badgeText: [{
        value: `Many fledgling heroes see Atlas Park as a mere stepping stone to the city districts beyond where greater rewards await.
Others turn their attention downwards, to the unseen avenues that underlie this famous starting location.
Not content to grandstand beneath Atlas's statue, hob-nobbing with the likes of Ms. Liberty, you understand that dark dangers live just beneath Atlas Park's streets.
You are determined to keep those dangers contained lest they stain Paragon City's glittering heart.`
    }],
    notes: `Located in [map:${SewerNetwork.key}] 272 yards southwest of the [map:${AtlasPark.key}] Sector marker, in the middle of the metal walkway.`,
    links: [
        {title: "Downward Bound Badge", href: "https://paragonwiki.com/wiki/Downward_Bound_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "6"
};
