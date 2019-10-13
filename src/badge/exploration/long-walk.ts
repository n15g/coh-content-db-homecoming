import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {PortOakes} from "../../map/port-oakes";

export const LongWalk: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "long-walk",
    names: [{value: "Long Walk"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: PortOakes.key,
    location: [-703.0, 128.0, 211.0],
    badgeText: [{
        value: `These long parking tunnels are the last thing that many who cross the Marcones see when they're asked to "come take a long walk."
 Those who live in Port Oakes know to steer clear - and that all of the cars in the lot belong to the Marcones.`
    }],
    notes: `Located in [map:${PortOakes.key}], in the Arena District neighborhood.

It is in the middle of the northern parking tunnel 73 yards south of the hospital.`,
    links: [
        {title: "Long Walk Badge", href: "https://paragonwiki.com/wiki/Long_Walk_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "5"
};
