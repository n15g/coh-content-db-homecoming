import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNeutropolis} from "../../map/underground-neutropolis";

export const DrinkEnriche: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "drink-enriche",
    setTitleId: 1743,
    names: [{value: "Drink Enriche!"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNeutropolis.key,
    location: [-1231.0, -1249.0, -1316.0],
    badgeText: [{
        value: "Careful study of the bowels of the Water Treatment Facility reveals two output pipes." +
            " One flows directly into the Praetorian water system. The other pipe ends at the Enriche Bottling Plant in Neutropolis. Curious..."
    }],
    notes: "Located in [map:underground-neutropolis] approximately 337 yards SSE of the Resistance Surface Access, near the bottom left corner of the series of red tunnels on the map.",
    links: [
        {title: "Drink Enriche! Badge", href: "https://paragonwiki.com/wiki/Drink_Enriche!_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "3"
};
