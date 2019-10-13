import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundImperial} from "../../map/underground-imperial";

export const Lowlife: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "lowlife",
    names: [{value: "Lowlife"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundImperial.key,
    location: [-862.0, 272.0, -5215.0],
    badgeText: [{
        value: "You stand at the lowest point in the entire Praetorian Underground network, the tunnel that dips beneath the channel separating the Behavioral Adjustment Facility from the mainland." +
            " You are now lower than any other life form in Praetoria. Congratulations!"
    }],
    notes: "Located in [map:underground-imperial] halfway up the red (on the map) hallway, 350 yds. NW of City Access B.",
    links: [
        {title: "Lowlife Badge", href: "https://paragonwiki.com/wiki/Lowlife_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "6"
};
