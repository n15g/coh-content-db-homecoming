import {ALIGNMENT_ANY, AlternateNameType, BadgeType, CohContentDbImageLibrary, IBadgeData} from "coh-content-db";
import {BloodyBay} from "../../map/bloody-bay";

export const Hungry: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hungry",
    canonicalName: "Hungry",
    alignment: ALIGNMENT_ANY,
    mapKey: BloodyBay.key,
    location: [-1194.0, 0.0, -743.0],
    alternateNames: [
        {type: AlternateNameType.H, value: "Hungry"},
        {type: AlternateNameType.V, value: "All Consuming"}
    ],
    badgeText: "The Shiva Shard fed on the dead here, causing the trees to grow larger and stronger around the old graveyard.",
    notes: "The All Consuming Badge is in the Forgotten Forest neighborhood of Bloody Bay. The badge marker is located about 100 feet south of Meteor Panch.",
    links: [
        {title: "Hungry Badge", href: "https://paragonwiki.com/wiki/Hungry_Badge"},
        {title: "All Consuming Badge", href: "https://paragonwiki.com/wiki/All_Consuming_Badge"}
    ],
    images: [CohContentDbImageLibrary.badge.exploration.hero, CohContentDbImageLibrary.badge.exploration.villain],
    vidiotMapKey: "2"
};
