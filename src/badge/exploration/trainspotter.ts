import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNova} from "../../map/underground-nova";

export const Trainspotter: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "trainspotter",
    names: [{value: "Trainspotter"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNova.key,
    location: [-1840.0, 511.0, -760.0],
    badgeText: [{
        value: "In this subterranean maintenance bay the Clockwork maintain and repair Praetoria's monorail cars." +
            " Here you may find some of the older cars that have since gone out of service: a trainspotter's dream."
    }],
    notes: "Located in [map:underground-nova] 565 yards SE of the Imperial Tunnel point.",
    links: [
        {title: "Trainspotter Badge", href: "https://paragonwiki.com/wiki/Trainspotter_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "6"
};
