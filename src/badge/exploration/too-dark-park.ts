import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoDarkAstoria} from "../../map/echo-dark-astoria";

export const TooDarkPark: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "too-dark-park",
    setTitleId: 1783,
    names: [{value: "Too Dark Park"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoDarkAstoria.key,
    location: [935.0, -1.0, 4321.0],
    badgeText: [{
        value: "In a far corner of the district lies McCraughly Park, a shadowy strip of green that had a dark reputation even before Astoria and its citizens were consumed by evil." +
            " Clusters of suicides, strange disappearances, and even a well-publicized multiple murder cast a dark shadow across the park." +
            " In the years leading up to the rise of Dark Astoria, the park was largely shunned, but now that the Banished Pantheon have dominion over the district, the park has become a focal" +
            " point for their evil rituals."
    }],
    notes: "Located in [map:echo-dark-astoria] 323 yards SE of Dido's View, at the base of the tree near the southernmost point of the eastern war wall.",
    links: [
        {title: "Too Dark Park Badge", href: "https://homecoming.wiki/wiki/Too_Dark_Park_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "6"
};
