import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {SharkheadIsle} from "../../map/sharkhead-isle";

export const CarpingTheDiem: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "carping-the-diem",
    setTitleId: 1499,
    names: [{value: "Carping the Diem"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: SharkheadIsle.key,
    location: [-1.0, 8.0, -1986.0],
    badgeText: [{
        value: `The Carpe Diem is the Family's 'flagship' for various overseas deals that they make.
 The ship is periodically grounded to deal with troublesome Scrapyarders.`
    }],
    notes: `Located in [map:${SharkheadIsle.key}], in the Port Recluse neighborhood.

It is in front of the cabin door of the ship in dry dock, 412 yards northwest of the neighborhood marker.`,
    links: [
        {title: "Carping the Diem Badge", href: "https://paragonwiki.com/wiki/Carping_the_Diem_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "8"
};
