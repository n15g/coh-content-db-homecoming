import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {NervaArchipelago} from "../../map/nerva-archipelago";

export const PrimalInstinct: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "primal-instinct",
    names: [{value: "Primal Instinct"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: NervaArchipelago.key,
    location: [2304.0, -110.0, 798.0],
    badgeText: [{
        value: `This is the spot of many battles between the Circle of Thorns and their age-old enemy, the Mu.`
    }],
    notes: `Located in [map:${NervaArchipelago.key}], in the Primeva neighborhood.

It is 266 yards north-northwest of the Primeva marker.
 The marker is well-hidden by being near no particular landmark.
 To get to it, go to the jungle below the Primeva marker and head north.
 When you reach a bridge, scale down the cliff and head left (west).
 You will soon come to a pyramid.
 Just past the pyramid, there are two large columns.
 The badge marker is within a fern just past and to the left of the left (southern) column.`,
    links: [
        {title: "Primal Instinct Badge", href: "https://paragonwiki.com/wiki/Primal_Instinct_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "4"
};
