import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {ReclusesVictory} from "../../map/recluses-victory";

export const TemporalFighter: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "temporal-fighter",
    names: [
        {type: Alternate.H, value: "Temporal Fighter"},
        {type: Alternate.V, value: "Dark Victory"},
    ],
    alignment: ALIGNMENT_ANY,
    mapKey: ReclusesVictory.key,
    location: [1027.0, 42.0, -1420.0],
    badgeText: [{value: "The Meinhoff Building was created in our current timeline to serve as an Arachnos base in this possible future."}],
    notes: "The Temporal Fighter Badge is located in the Recluse's Victory zone in Sector 1." +
        " It is due west of the ramp leading out of the monorail station in a narrow alleyway between two buildings.",
    links: [
        {title: "Temporal Fighter Badge", href: "https://paragonwiki.com/wiki/Temporal_Fighter_Badge"},
        {title: "Dark Victory Badge", href: "https://paragonwiki.com/wiki/Dark_Victory_Badge"}
    ],
    imageKeys: [
        {type: Alternate.H, value: "core.exploration.hero"},
        {type: Alternate.V, value: "core.exploration.villain"}
    ],
    vidiotMapKey: "3"
};
