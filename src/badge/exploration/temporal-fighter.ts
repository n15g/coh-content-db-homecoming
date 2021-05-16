import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {ReclusesVictory} from "../../map/recluses-victory";

export const TemporalFighter: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "temporal-fighter",
    setTitleId: 289,
    names: [
        {type: Alternate.H, value: "Temporal Fighter"},
        {type: Alternate.V, value: "Dark Victory"},
    ],
    alignment: ALIGNMENT_ANY,
    mapKey: ReclusesVictory.key,
    location: [1027.0, 42.0, -1420.0],
    badgeText: [{value: "The Meinhoff Building was created in our current timeline to serve as an Arachnos base in this possible future."}],
    notes: "The Temporal Fighter Badge is located in the [map:${ReclusesVictory.key}] zone in Sector 1." +
        " It is due west of the ramp leading out of the monorail station in a narrow alleyway between two buildings.",
    links: [
        {title: "Temporal Fighter Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Temporal_Fighter_Badge"},
        {title: "Dark Victory Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Dark_Victory_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "3"
};
