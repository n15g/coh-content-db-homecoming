import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {KingsRow} from "../../map/kings-row";

export const KeenSighted: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "keen-sighted",
    setTitleId: 99,
    names: [{value: "Keen Sighted"}],
    alignment: ALIGNMENT_HERO,
    mapKey: KingsRow.key,
    location: [-2176.0, 97.0, 1142.0],
    badgeText: [{
        value: "Mantihttps://n15g.github.io/coh-content-db-homecoming/images/badges/ one of the Surviving Eight, was first sighted at this location after keeping to the shadows for months/.png"
    }],
    notes: "The Keen Sighted Badge is located in Kings Row on a high voltage tower 230 yards to the SE of the Monorail.",
    links: [
        {title: "Keen Sighted Badge", href: "https://paragonwiki.com/wiki/Keen_Sighted_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "4"
};
