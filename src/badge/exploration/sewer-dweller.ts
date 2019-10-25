import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {Grandville} from "../../map/grandville";

export const SewerDweller: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "sewer-dweller",
    setTitleId: 284,
    names: [{value: "Sewer Dweller"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: Grandville.key,
    location: [2682.0, -443.0, -731.0],
    badgeText: [{
        value: `A new low, even for a villain, you've stumbled through the very very bottom of Grandville in the area known as 'The Gutter.'`
    }],
    notes: `Located in [map:${Grandville.key}], in The Gutter neighborhood of Grandville.

It is on top of a sewer pipe located 216 yards northeast of The Gutter marker.`,
    links: [
        {title: "Sewer Dweller Badge", href: "https://paragonwiki.com/wiki/Sewer_Dweller_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "2"
};
