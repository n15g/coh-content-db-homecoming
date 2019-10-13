import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {StMartial} from "../../map/st-martial";

export const CamelSnot: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "camel-snot",
    names: [{value: "Camel Snot"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: StMartial.key,
    location: [-1885.0, 595.0, 2046.0],
    badgeText: [{
        value: `You've finally done it, you've mastered the art of mixing the elusive 'Camel Snot'`
    }],
    notes: `Located in [map:${StMartial.key}], on the Golden Giza casino in the Babylon neighborhood.

The marker is on the top balcony (the last one before you reach the top of the pyramid). It is just west of the centerline of the slope.`,
    links: [
        {title: "Camel Snot Badge", href: "https://paragonwiki.com/wiki/Camel_Snot_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "4"
};
