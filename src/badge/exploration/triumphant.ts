import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Warburg} from "../../map/warburg";

export const Triumphant: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "triumphant",
    setTitleId: 293,
    names: [{value: "Triumphant"}],
    alignment: ALIGNMENT_ANY,
    mapKey: Warburg.key,
    location: [228.0, 274.0, 33.0],
    badgeText: [{value: "The symbolism is hard to miss: whoever controls the Warburg rockets controls the world. Whether this is pure delusion or an ominous warning is a subject of much debate."}],
    notes: "The Triumphant Badge is located in [map:${Warburg.key}] at the top of the golden globe with the rocket flying around it in the center of the map.",
    links: [{title: "Triumphant Badge", href: "https://paragonwiki.com/wiki/Triumphant_Badge"}],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "3"
};
