import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {KingsRow} from "../../map/kings-row";

export const Smokey: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "smokey",
    names: [{value: "Smokey"}],
    alignment: ALIGNMENT_HERO,
    mapKey: KingsRow.key,
    location: [-3042.0, -41.0, -1358.0],
    badgeText: [{
        value: "King Garment Works dominated the Kings Row economy for years. These smoke stacks were part of their manufacturing facility."
    }],
    notes: "TThe Smokey Badge is located in Kings Row, in the far NE corner of the Royal Refinery neighborhood.",
    links: [
        {title: "Smokey Badge", href: "https://paragonwiki.com/wiki/Smokey_Badge"}
    ],
    icons: [{value: "core.exploration.hero"}],
    vidiotMapKey: "5"
};
