import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {ImperialCity} from "../../map/imperial-city";

export const Seen: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "seen",
    setTitleId: 1406,
    names: [{value: "Seen"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ImperialCity.key,
    location: [-460.0, -56.0, -336.0],
    badgeText: [{
        value: "This is the part of the city where exposure is prime real estate. It's the place to see and be seen."
    }],
    notes: "Located in [map:imperial-city] 241 yards SE of Aureas, or 401 yards W of the People's Park marker.",
    links: [
        {title: "Seen Badge", href: "https://paragonwiki.com/wiki/Seen_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "5"
};
