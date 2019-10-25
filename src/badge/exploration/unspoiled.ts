import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Eden} from "../../map/eden";

export const Unspoiled: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "unspoiled",
    setTitleId: 141,
    names: [{value: "Unspoiled"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Eden.key,
    location: [2482.0, 34.0, 2350.0],
    badgeText: [{
        value: `The beauty that is Eden Falls came at a terrible price.`
    }],
    notes: `Located in [map:${Eden.key}] 105 yards south of The Cascades marker.`,
    links: [
        {title: "Unspoiled Badge", href: "https://paragonwiki.com/wiki/Unspoiled_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
