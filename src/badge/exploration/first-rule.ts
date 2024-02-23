import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {MercyIsland} from "../../map/mercy-island";

export const FirstRule: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "first-rule",
    setTitleId: 1484,
    names: [{value: "First Rule"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MercyIsland.key,
    location: [-74.0, 65.0, -1602.0],
    badgeText: [{
        value: `The first rule of Infected Fight Club is that you don't talk about it. At least that's what the RIP told you after you walked in on one of their Infected Fighting Rings in Mercy.`
    }],
    notes: `Located on [map:${MercyIsland.key}], in the Darwin's Landing neighborhood.

It is in the middle of the triangular fight club arena 612 yards WSW of the neighborhood marker.`,
    links: [
        {title: "First Rule Badge", href: "https://homecoming.wiki/wiki/First_Rule_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "7"
};
