import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {ImperialCity} from "../../map/imperial-city";

export const Seer: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "seer",
    names: [{value: "Seer"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ImperialCity.key,
    location: [-2838.0, -12.0, 2603.0],
    badgeText: [{
        value: "Blind yet seeing and casting judgment yet mindless of the crime; the Seer is the instrument of control and the constant threat of the Emperor's displeasure."
    }],
    notes: "Located in [map:imperial-city] 347 yards ENE of the Four Gables marker.",
    links: [
        {title: "Seer Badge", href: "https://paragonwiki.com/wiki/Seer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "6"
};
