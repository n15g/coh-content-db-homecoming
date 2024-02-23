import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SewerNetwork} from "../../map/sewer-network";

export const Plutonian: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "plutonian",
    setTitleId: 1830,
    names: [{value: "Plutonian"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SewerNetwork.key,
    location: [-32.0, -896.0, 26.0],
    badgeText: [{
        value: `The best knowledge is knowledge acquired in secret, without the filters thrown up by outside forces to edit or alter that information.
And with information comes power, the power of dominion over all that you survey.
From here your influence could spread throughout the city, and away from the prying eyes of those above you could gather your power free of interference.
You understand now why so many of a dark bent frequent the tunnels of the Sewer Network.
There is a power here, one that will give itself to you if you have the will to take it.`
    }],
    notes: `Located in [map:${SewerNetwork.key}] 389 yards southeast of the Underworld marker, behind a winch in the trial room in the center of the map.`,
    links: [
        {title: "Plutonian Badge", href: "https://homecoming.wiki/wiki/Plutonian_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
