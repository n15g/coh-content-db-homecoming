import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {MercyIsland} from "../../map/mercy-island";

export const Chum: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "chum",
    setTitleId: 265,
    names: [{value: "Chum"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MercyIsland.key,
    location: [-4048.0, 6.0, -1854.0],
    badgeText: [{
        value: `Just when you thought it was safe...`
    }],
    notes: `Located on [map:${MercyIsland.key}], on a small island due south of Fort Darwin (a base taken over by Longbow). It is on a small beach on the northwest side of the island.`,
    links: [
        {title: "Chum Badge", href: "https://homecoming.wiki/wiki/Chum_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "3"
};
