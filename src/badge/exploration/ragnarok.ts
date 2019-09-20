import {ALIGNMENT_ANY, BadgeType, CohContentDbImageLibrary, IBadgeData} from "coh-content-db";
import {ReclusesVictory} from "../../map/recluses-victory";

export const Ragnarok: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "ragnarok",
    canonicalName: "Ragnarok",
    alignment: ALIGNMENT_ANY,
    mapKey: ReclusesVictory.key,
    location: [-848.0, -15.0, -352.0],
    badgeText: "Some say this battle will signal the end of civilization as we know it, and the beginning of a new history—written by Lord Recluse.",
    notes: "The Ragnarok Badge is located in the Recluse's Victory zone in Sector 3." +
        " It is at the north end of a cobblestone walkway on the western side of a small park, 418 yards due south of the Echo pillbox.",
    links: [
        {title: "Ragnaraok Badge", href: "https://paragonwiki.com/wiki/Ragnarok_Badge"}
    ],
    images: [CohContentDbImageLibrary.badge.exploration.hero, CohContentDbImageLibrary.badge.exploration.villain],
    vidiotMapKey: "2"
};
