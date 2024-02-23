import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundImperial} from "../../map/underground-imperial";

export const SilentWitness: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "silent-witness",
    setTitleId: 1651,
    names: [{value: "Silent Witness"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundImperial.key,
    location: [-2482.0, 335.0, -591.0],
    badgeText: [{
        value: "You have seen much injustice and brutality in your journeys through Praetoria, and here beneath Precinct 4 in Imperial City you are witness to a chamber dedicated to both." +
            " Will you remain silent forever?"
    }],
    notes: "Located in [map:underground-imperial] in the red area 256 yds. NNE of Underground Transit.",
    links: [
        {title: "Silent Witness Badge", href: "https://homecoming.wiki/wiki/Silent_Witness_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "7"
};
