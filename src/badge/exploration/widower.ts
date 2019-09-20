import {ALIGNMENT_VILLAIN, AlternateNameType, BadgeType, CohContentDbImageLibrary, IBadgeData} from "coh-content-db";
import {MercyIsland} from "../../map/mercy-island";

export const Widower: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "widower",
    canonicalName: "Widower",
    alternateNames: [
        {type: AlternateNameType.M, value: "Widower"},
        {type: AlternateNameType.F, value: "Widow"},
    ],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MercyIsland.key,
    location: [-3890.0, 407.0, 354.0],
    badgeText: "They say that lonely tower is the home of Ghost Widow, Lord Recluse's phantom servant.",
    notes: "The Widower Badge marker is located outside the door of the very tall tower in the northeast corner of Fort Cerberus on Mercy Island.",
    links: [
        {title: "Widower Badge", href: "https://paragonwiki.com/wiki/Widower_Badge"},
        {title: "Widow Badge", href: "https://paragonwiki.com/wiki/Widow_Badge"},
    ],
    images: [CohContentDbImageLibrary.badge.exploration.villain],
    vidiotMapKey: "6"
};
