import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {Neutropolis} from "../../map/neutropolis";

export const UrbanRenewal: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "urban-renewal",
    setTitleId: 1730,
    names: [{value: "Urban Renewal"}],
    alignment: ALIGNMENT_ANY,
    mapKey: Neutropolis.key,
    location: [6356.0, -64.0, -1206.0],
    badgeText: [{
        value: "Older sections of the city like this pre-date much of Emperor Cole's reign, and as such have not been renovated to match the rest of the city." +
            " Constant distractions and sabotage by the Resistance and others have delayed such work indefinitely."
    }],
    notes: "Located in [map:neutropolis] 438 yards NW of the Lambda Sector marker.",
    links: [
        {title: "Urban Renewal Badge", href: "https://homecoming.wiki/wiki/Urban_Renewal_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "8"
};
