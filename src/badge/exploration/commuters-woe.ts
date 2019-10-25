import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {PortOakes} from "../../map/port-oakes";

export const CommutersWoe: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "commuters-woe",
    setTitleId: 1489,
    names: [{value: "Commuter's Woe"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: PortOakes.key,
    location: [1771.0, 64.0, -696.0],
    badgeText: [{
        value: `The Mount Diable Tunnel, destroyed following a turf war gone explosive, connected Port Oakes to Cap au Diable.
 Much to the chagrin of many commuters, no effort has been made to rebuild it.`
    }],
    notes: `Located in [map:${PortOakes.key}], in the Oil Spill neighborhood.

It is at the blocked off tunnel 194 yards west of the Quartermaster.`,
    links: [
        {title: "Commuter's Woe Badge", href: "https://paragonwiki.com/wiki/Commuter%27s_Woe_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "7"
};
