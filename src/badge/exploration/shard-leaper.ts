import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FirebaseZulu} from "../../map/firebase-zulu";

export const ShardLeaper: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "shard-leaper",
    setTitleId: 1804,
    names: [{value: "Shard Leaper"}],
    alignment: ALIGNMENT_HERO,
    mapKey: FirebaseZulu.key,
    location: [-202.0, 1013.0, 2285.0],
    badgeText: [{
        value: "It is an odd coincidence that the soldiers manning Point Sierra are composed of units drawn from Mountaineering Corps." +
            " One of the ways by which they welcome new recruits to their station is to take a \"hop\" over to the neighboring shard for a quick strike-and-fade attack against the enemy." +
            " They welcome you to do the same."
    }],
    notes: "Located in [map:firebase-zulu] 423 yards NW of the Point Sierra marker, on the north side of the small island.",
    links: [
        {title: "Shard Leaper Badge", href: "https://homecoming.wiki/wiki/Shard_Leaper_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "8"
};
