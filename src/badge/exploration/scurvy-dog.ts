import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {PortOakes} from "../../map/port-oakes";

export const ScurvyDog: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "scurvy-dog",
    setTitleId: 251,
    names: [{value: "Scurvy Dog"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: PortOakes.key,
    location: [-2852.0, 82.0, 1216.0],
    badgeText: [{
        value: `The owner of Blackbeard's pub is rumored to have sent more than one patron to Davey Jones locker.`
    }],
    notes: `Located in [map:${PortOakes.key}], on Blackbeard's Pub, a shack located next to Drea the Hook in the Dockside neighborhood.

The pub is approximately 190 yeard south and slightly east of the Dockside marker, and the badge marker is on the southwest side of the building,
 on top of a small landing supported by corrugated metal..`,
    links: [
        {title: "Scurvy Dog Badge", href: "https://paragonwiki.com/wiki/Scurvy_Dog_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "1"
};
