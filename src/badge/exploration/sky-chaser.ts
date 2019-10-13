import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {SharkheadIsle} from "../../map/sharkhead-isle";

export const SkyChaser: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "sky-chaser",
    names: [{value: "Sky Chaser"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: SharkheadIsle.key,
    location: [304.0, 127.0, 2309.0],
    badgeText: [{
        value: `The Sky Raiders use this as one of their main bases.
 Some say that they received funding from Arachnos to build the base in Sharkhead, perhaps to serve as a balance against the Council base nearby.`
    }],
    notes: `Located in [map:${SharkheadIsle.key}], on the Sky Raider base at the south edge of The Pit neighborhood.

It is on the one upper platform that doesn't have a turret on it.`,
    links: [
        {title: "Sky Chaser Badge", href: "https://paragonwiki.com/wiki/Sky_Chaser_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "5"
};
