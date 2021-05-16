import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {ImperialCity} from "../../map/imperial-city";

export const ParkRanger: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "park-ranger",
    setTitleId: 1632,
    names: [{value: "Park Ranger"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ImperialCity.key,
    location: [-1279.0, -87.0, -512.0],
    badgeText: [{
        value: "People's Park was established as a place of peace and recreation for the citizens of Praetoria. By patrolling it you do a service to Praetoria and its people."
    }],
    notes: "Located in [map:imperial-city] 144 yards NW of the People's Park marker.",
    links: [
        {title: "Park Ranger Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Park_Ranger_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "3"
};
