import {BadgeType, CohContentDbImageLibrary, IBadgeData} from "coh-content-db";
import {MapKey} from "../../maps";

export const Imploding: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "imploding",
    canonicalName: "Imploding",
    alignment: {h: true, v: true, p: true},
    mapKey: MapKey.BLOODY_BAY,
    location: [1885.0, 129.0, 1337.0],
    badgeText: "In this building the first of Cape Canaveral's scientists was infected and transformed by the Shiva Shard, eventually causing him to implode.",
    notes: "The Imploding Badge marker is located on a building rooftop 110 yards north and slightly east of Meteor Teen.",
    links: [
        {title: "Imploding Badge", href: "https://paragonwiki.com/wiki/Imploding_Badge"}
    ],
    images: [CohContentDbImageLibrary.badge.exploration.hero, CohContentDbImageLibrary.badge.exploration.villain],
    vidiotMapNumber: 3
};
