import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {AbandonedSewerNetwork} from "../../map/abandoned-sewer-network";

export const HadesAspirant: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hades-aspirant",
    setTitleId: 1822,
    names: [{value: "Hades Aspirant"}],
    alignment: ALIGNMENT_HERO,
    mapKey: AbandonedSewerNetwork.key,
    location: [16.0, -896.0, 0.0],
    badgeText: [{
        value: "At the deepest point beneath Paragon City the sounds of the millions above and the machinery that support them filter down to this dark place as a mournful groan." +
            " It is not difficult to understand why this part of the Abandoned Sewer Network came to be known as the Underworld, for no where else does it feel more isolated and desolate."
    }],
    notes: "Located in [map:abandoned-sewer-network] 382 yards southeast of the Underworld marker, at the base of the metal walkway leading to the sub-sewer" +
        " shaft in the trial room in the center of the zone.",
    links: [
        {title: "Hades Aspirant Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Hades_Aspirant_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
