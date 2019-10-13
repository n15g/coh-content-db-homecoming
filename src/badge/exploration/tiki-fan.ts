import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {MercyIsland} from "../../map/mercy-island";

export const TikiFan: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "tiki-fan",
    names: [{value: "Tiki Fan"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MercyIsland.key,
    location: [-1836.0, 239.0, 438.0],
    badgeText: [{
        value: `Larry's Tiki Lounge is known for its gambling, drinks, fun, and Tikis. And also for the occasional invasion by giant snake monsters.`
    }],
    notes: `Located on [map:${MercyIsland.key}], in the Mercy neighborhood.

It is directly in front of Larry's Tiki Lounge 133 yards SE of the neighborhood marker.`,
    links: [
        {title: "Tiki Fan Badge", href: "https://paragonwiki.com/wiki/Tiki_Fan_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "8"
};
