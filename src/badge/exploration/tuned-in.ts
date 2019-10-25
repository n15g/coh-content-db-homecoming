import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {ImperialCity} from "../../map/imperial-city";

export const TunedIn: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "tuned-in",
    setTitleId: 1409,
    names: [{value: "Tuned In"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ImperialCity.key,
    location: [-1370.0, -32.0, -1731.0],
    badgeText: [{
        value: "The Total Praetorian Network is the best source of news and entertainment. Well, the best LEGAL source for news and entertainment, anyway."
    }],
    notes: "Located in [map:imperial-city] 41 yards NW of the Logos marker.",
    links: [
        {title: "Tuned In Badge", href: "https://paragonwiki.com/wiki/Tuned_In_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "8"
};
