import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {Grandville} from "../../map/grandville";

export const Guttersnipe: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "guttersnipe",
    setTitleId: 285,
    names: [{value: "Guttersnipe"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: Grandville.key,
    location: [2861.0, -475.0, 2310.0],
    badgeText: [{
        value: `Life at the bottom is rough, and after visiting Hobo Row in the Grandville's Gutter you can agree.`
    }],
    notes: `Located in [map:${Grandville.key}], 228 yards south-southwest of the Spider City marker.`,
    links: [
        {title: "Guttersnipe Badge", href: "https://paragonwiki.com/wiki/Guttersnipe_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "3"
};
