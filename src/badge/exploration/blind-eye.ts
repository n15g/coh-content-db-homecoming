import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {NervaArchipelago} from "../../map/nerva-archipelago";

export const BlindEye: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "blind-eye",
    setTitleId: 1502,
    names: [{value: "Blind Eye"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: NervaArchipelago.key,
    location: [3526.0, 141.0, 3886.0],
    badgeText: [{
        value: `Longbow uses these state-of-the-art facilities to perform experiments on a small group of monsters they encounter.
Longbow policy dictates that they turn their charges in to the proper authorities back in Paragon, but Agincourt officials routinely turn a blind eye to this facility's activities.`
    }],
    notes: `Located in [map:${NervaArchipelago.key}], in the Agincourt neighborhood.

It is in the specimen building 58 yards beneath the neighborhood marker.`,
    links: [
        {title: "Blind Eye Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Blind_Eye_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "7"
};
