import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {StMartial} from "../../map/st-martial";

export const InfamousRubble: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "infamous-rubble",
    setTitleId: 1507,
    names: [{value: "Infamous Rubble"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: StMartial.key,
    location: [-4851.0, 153.0, 1868.0],
    badgeText: [{
        value: `This pile of rubble used to be one of the largest skyscrapers within St. Martial.
 When the Wailers appeared, a huge battle broke out among Wailers, Arachnos and the Family, which led to the utter destruction of this building and the spread of Wailers into St. Martial.`
    }],
    notes: `Located in [map:${StMartial.key}], in the Hard Way neighborhood.

It is on top of the large pile of rubble 217 yards east of the neighborhood marker.

Note: The texture of the rubble can make it hard to see the badge marker.`,
    links: [
        {title: "Infamous Rubble Badge", href: "https://homecoming.wiki/wiki/Infamous_Rubble_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "7"
};
