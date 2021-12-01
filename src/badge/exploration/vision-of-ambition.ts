import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Cimerora} from "../../map/cimerora";

export const VisionOfAmbition: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "vision-of-ambition",
    setTitleId: 2467,
    names: [{value: "Vision of Ambition"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `Before proclaiming himself Emperor, Romulus Augustus was often seen visiting this rampart in the mountains. Always alone, he would spend hours staring out towards the open sea. Some claim this was the birthplace of his machinations to overthrow Imperious and conquer Cimerora.`}],
    mapKey: Cimerora.key,
    location: [-1724.0, 368.8, 1327.0],
    notes: `Located in [map:cimerora] in the northeast corner of Castellum Quarter, in the center of a tower, 533 yards northeast of the Castellum Quarter neighborhood marker.`,
    links: [
        {title: "Vision of Ambition Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Vision_of_Ambition_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"},
    ],
    vidiotMapKey: "7"
};
