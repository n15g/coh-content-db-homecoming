import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {SharkheadIsle} from "../../map/sharkhead-isle";

export const PitViper: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "pit-viper",
    names: [{value: "Pit Viper"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: SharkheadIsle.key,
    location: [148.0, -377.0, 1500.0],
    badgeText: [{
        value: `This hole is used by the locals as a makeshift arena for fighting and wagering.`
    }],
    notes: `Located in [map:${SharkheadIsle.key}], at the bottom of the pit in The Pit neighborhood.

The badge marker is located 70 feet west of The Pit marker.`,
    links: [
        {title: "Pit Viper Badge", href: "https://paragonwiki.com/wiki/Pit_Viper_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "4"
};
