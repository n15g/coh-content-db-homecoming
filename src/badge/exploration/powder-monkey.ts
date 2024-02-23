import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {PortOakes} from "../../map/port-oakes";

export const PowderMonkey: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "powder-monkey",
    setTitleId: 253,
    names: [{value: "Powder Monkey"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: PortOakes.key,
    location: [-3738.0, 238.0, -1128.0],
    badgeText: [{
        value: `The last of the pirates died at this location defending the fort against Blackbeard.`
    }],
    notes: `Located in [map:${PortOakes.key}], behind three cannons in the Fort Hades neighborhood.

The badge marker is approximately 154 yards east and slightly south of the Fort Hades marker.`,
    links: [
        {title: "Powder Monkey Badge", href: "https://homecoming.wiki/wiki/Powder_Monkey_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "3"
};
