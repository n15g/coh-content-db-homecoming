import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Croatoa} from "../../map/croatoa";

export const Spiritual: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "spiritual",
    setTitleId: 409,
    names: [{value: "Spiritual"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Croatoa.key,
    location: [-2669.0, 11.0, 1102.0],
    badgeText: [{
        value: "It may be in dangerous territory, but this lake, frequented by the Cabal's strange sprites, is one of the most beautiful sights near Salamanca."
    }],
    notes: "Located under the wall of trees, 300 yds NE from the Misty Wood waypoint. It is to the NE of the small round pond.",
    links: [
        {title: "Spiritual Badge", href: "https://homecoming.wiki/wiki/Spiritual_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "2"
};
