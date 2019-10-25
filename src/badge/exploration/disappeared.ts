import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNova} from "../../map/underground-nova";

export const Disappeared: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "disappeared",
    setTitleId: 1637,
    names: [{value: "Disappeared"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNova.key,
    location: [-2640.0, 641.0, -1312.0],
    badgeText: [{
        value: "This is where enemies of the State vanish forever. These lost souls have been brought here from the PPD Headquarters for summary execution without review or recourse."
    }],
    notes: "Located in [map:underground-nova] approximately 345 yards NNW of City Access B.",
    links: [
        {title: "Disappeared Badge", href: "https://paragonwiki.com/wiki/Disappeared_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "2"
};
