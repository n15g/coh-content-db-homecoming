import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Cimerora} from "../../map/cimerora";

export const OutOfBounds: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "out-of-bounds",
    setTitleId: 2465,
    names: [{value: "Out of Bounds"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `The Cimeroran Traitors have kept Castellum Quarter under their control for years. The walls have proven to be nearly impossible to breach, successfully rendering the fortress unreachable to even the strongest warriors.`}],
    mapKey: Cimerora.key,
    location: [-1004.0, 138.2, 3123.5],
    notes: `Located in [map:cimerora] on the northern side of the giant doors leading to the main bridge to Cimerora, 127 yards south of the Castellum Quarter neighborhood marker.`,
    links: [
        {title: "Out of Bounds Badge", href: "https://homecoming.wiki/wiki/Out_of_Bounds_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"},
    ],
    vidiotMapKey: "5"
};
