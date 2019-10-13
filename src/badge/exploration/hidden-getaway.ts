import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {PortOakes} from "../../map/port-oakes";

export const HiddenGetaway: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hidden-getaway",
    names: [{value: "Hidden Getaway"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: PortOakes.key,
    location: [365.0, 128.0, -2424.0],
    badgeText: [{
        value: `When things became heated between rival families, heads of the Marcones have been known to hide in this cabin, sometimes using the nearby submarine to escape to better grounds.
 Some say this may even be where the first monkey fight club was started.`
    }],
    notes: `Located in [map:${PortOakes.key}], in the Villa Montrose neighborhood.

It is at the front door of the remote house in the NW corner of the neighborhood, 590 yards west of the marker.`,
    links: [
        {title: "Hidden Getaway Badge", href: "https://paragonwiki.com/wiki/Hidden_Getaway_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "8"
};
