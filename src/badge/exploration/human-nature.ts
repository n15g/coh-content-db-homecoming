import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Cimerora} from "../../map/cimerora";

export const HumanNature: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "human-nature",
    setTitleId: 2466,
    names: [{value: "Human Nature"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `Deep inside Castellum Quarter, soldiers once loyal to Imperious now plot his downfall. Despite alien and magical influence, it was just the basic nature of humanity to follow the strong, regardless of their morality, that helped swell Romulus' ranks.`}],
    mapKey: Cimerora.key,
    location: [-976.0, 227.8, 1390.0],
    notes: `Located in [map:cimerora] in front of the doors of a building at the center of the northern edge of Castellum Quarter, 451 yards north of the Castellum Quarter neighborhood marker.`,
    links: [
        {title: "Human Nature Badge", href: "https://homecoming.wiki/wiki/Human_Nature_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"},
    ],
    vidiotMapKey: "6"
};
