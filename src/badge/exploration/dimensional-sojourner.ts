import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FirebaseZulu} from "../../map/firebase-zulu";

export const DimensionalSojourner: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "dimensional-sojourner",
    setTitleId: 1798,
    names: [{value: "Dimensional Sojourner"}],
    alignment: ALIGNMENT_HERO,
    mapKey: FirebaseZulu.key,
    location: [5981.0, 1120.0, 916.0],
    badgeText: [{
        value: "You have tread upon the soil of a parallel dimension and now are ready to expand your horizons." +
            " From this point, portals link Firebase Zulu to other operational bases scattered throughout the Shadow Shard." +
            " Each minute you spend here places you among a tiny fraction of the human race who have not only left the world of their birth, but breathed the air of an alien world." +
            " You are a rare breed, a privileged traveler, a Dimensional Sojourner."
    }],
    notes: "Located in [map:firebase-zulu] 179 yards NE of the Firebase Zulu marker, in the middle of the portals that provide transport to the other Shard zones.",
    links: [
        {title: "Dimensional Sojourner Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Dimensional_Sojourner_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
