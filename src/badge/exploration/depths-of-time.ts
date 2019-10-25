import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Cimerora} from "../../map/cimerora";

export const DepthsOfTime: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "depths-of-time",
    setTitleId: 990,
    names: [{value: "Depths of Time"}],
    alignment: ALIGNMENT_ANY,
    mapKey: Cimerora.key,
    location: [-1108.0, 9.0, 4262.0],
    badgeText: [{
        value: "You have traveled back in time to the Roman era. Here is the origins of all you have come to understand as heroic and villainous."
    }],
    notes: "The Depths of Time Badge is located in Cimerora. The marker is by the fountain in the central square, just in front of Marcus Valerius.",
    links: [
        {title: "Depths of Time Badge", href: "https://paragonwiki.com/wiki/Depths_of_Time_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"},
    ],
    vidiotMapKey: "1"
};
