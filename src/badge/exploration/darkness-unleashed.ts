import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Cimerora} from "../../map/cimerora";

export const DarknessUnleashed: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "darkness-unleashed",
    setTitleId: 2468,
    names: [{value: "Darkness Unleashed"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `The mighty beasts that roam the hills of Cimerora guard certain cave entrances fiercely. Rumours say that 'dark ones' are the source of their power, and entering those caves is the first step in walking the Path of the Dark.`}],
    mapKey: Cimerora.key,
    location: [-170.0, 192.3, 1490.0],
    notes: `Located in [map:cimerora] in the northwest corner of Castellum Quarter, between two trees along the cliffs, 501 yards northwest of the Castellum Quarter neighborhood marker.`,
    links: [
        {title: "Darkness Unleashed Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Darkness_Unleashed_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"},
    ],
    vidiotMapKey: "8"
};