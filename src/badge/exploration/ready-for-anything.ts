import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNeutropolis} from "../../map/underground-neutropolis";

export const ReadyForAnything: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "ready-for-anything",
    setTitleId: 1746,
    names: [{value: "Ready for Anything"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNeutropolis.key,
    location: [-1859.0, -1248.0, -4112.0],
    badgeText: [{
        value: "This training room under Lambda Sector serves as a harsh urban combat 'shoothouse' for the Imperial Defense Force and PPD TEST." +
            " Live fire exercises are also known as 'Resistance assaults.'"
    }],
    notes: "Located in [map:underground-neutropolis] in the square at the far north of the map.",
    links: [
        {title: "Ready for Anything Badge", href: "https://paragonwiki.com/wiki/Ready_for_Anything_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "6"
};
