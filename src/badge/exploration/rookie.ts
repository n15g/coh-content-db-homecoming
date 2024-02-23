import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {AtlasPark} from "../../map/atlas-park";

export const Rookie: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "rookie",
    setTitleId: 2025,
    names: [{value: "Rookie"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `Newly registered heroes in Paragon City often start out in Atlas Park, where they can speak with more established heroes to receive advice and guidance.`}],
    mapKey: AtlasPark.key,
    location: [128.5, 16.4, -233.0],
    notes: `Located behind Ms. Liberty, who stands in front of the new character spawn point in [map:${AtlasPark.key}].`,
    links: [
        {title: "Rookie Badge", href: "https://homecoming.wiki/wiki/Rookie_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
    ],
    vidiotMapKey: "4"
};
