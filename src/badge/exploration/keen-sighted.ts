import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {KingsRow} from "../../map/kings-row";

export const KeenSighted: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "keen-sighted",
    names: [{value: "Keen Sighted"}],
    alignment: ALIGNMENT_HERO,
    mapKey: KingsRow.key,
    location: [-2176.0, 97.0, 1142.0],
    badgeText: [{
        value: "Manticore, one of the Surviving Eight, was first sighted at this location after keeping to the shadows for months."
    }],
    notes: "The Keen Sighted Badge is located in Kings Row on a high voltage tower 230 yards to the SE of the Monorail.",
    links: [
        {title: "Keen Sighted Badge", href: "https://paragonwiki.com/wiki/Keen_Sighted_Badge"}
    ],
    icons: [{value: "core.exploration.hero"}],
    vidiotMapKey: "4"
};
