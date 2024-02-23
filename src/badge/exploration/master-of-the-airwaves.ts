import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Grandville} from "../../map/grandville";

export const MasterOfTheAirwaves: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "master-of-the-airwaves",
    setTitleId: 286,
    names: [
        {type: Alternate.M, value: "Master of the Airwaves"},
        {type: Alternate.F, value: "Mistress of the Airwaves"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: Grandville.key,
    location: [2726.0, 734.0, 1043.0],
    badgeText: [{
        value: `Top of the world! You have climbed to the top of the radio tower in Grandville.`
    }],
    notes: `Located in [map:${Grandville.key}], in the Tangle neighborhood.
    
The marker is on a ledge on the large tower in the center of the zone. It is located on the south face of the tower just above the large Arachnos logo.`,
    links: [
        {title: "Master of the Airwaves Badge", href: "https://homecoming.wiki/wiki/Master_of_the_Airwaves_Badge"},
        {title: "Mistress of the Airwaves Badge", href: "https://homecoming.wiki/wiki/Mistress_of_the_Airwaves_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "4"
};
