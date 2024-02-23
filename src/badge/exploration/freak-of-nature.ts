import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {SharkheadIsle} from "../../map/sharkhead-isle";

export const FreakOfNature: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "freak-of-nature",
    setTitleId: 297,
    names: [{value: "Freak of Nature"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: SharkheadIsle.key,
    location: [1229.0, 90.0, -2183.0],
    badgeText: [{
        value: `The Freakshow have managed to find utopia in this forsaken slag heap.`
    }],
    notes: `Located in [map:${SharkheadIsle.key}], just east of the center of the Freakshow shanty 295 yards north of The Crush neighborhood marker.

There is a metal grate bridge leading to a lookout point. The marker is at the start of that metal grate bridge.`,
    links: [
        {title: "Freak of Nature Badge", href: "https://homecoming.wiki/wiki/Freak_of_Nature_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "3"
};
