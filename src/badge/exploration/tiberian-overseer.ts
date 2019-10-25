import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {ImperialCity} from "../../map/imperial-city";

export const TiberianOverseer: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "tiberian-overseer",
    setTitleId: 1634,
    names: [{value: "Tiberian Overseer"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ImperialCity.key,
    location: [564.0, 109.0, 3168.0],
    badgeText: [{
        value: "From this high perch the Tiberian Overseer casts their gaze across the city-state of Praetoria, taking in its beauty while seeking out the corruption that threatens it."
    }],
    notes: "Located in [map:imperial-city] 185 yards N of the Tiberian Bluff marker.",
    links: [
        {title: "Tiberian Overseer Badge", href: "https://paragonwiki.com/wiki/Tiberian_Overseer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "7"
};
