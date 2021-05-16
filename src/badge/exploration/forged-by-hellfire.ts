import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {SharkheadIsle} from "../../map/sharkhead-isle";

export const ForgedByHellfire: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "forged-by-hellfire",
    setTitleId: 296,
    names: [{value: "Forged by Hellfire"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: SharkheadIsle.key,
    location: [1970.0, 64.0, -192.0],
    badgeText: [{
        value: `The Hell Forge is the largest above ground furnace on the planet.`
    }],
    notes: `Located in [map:${SharkheadIsle.key}], in the Hell Forge neighborhood.

Just west of the Hell Forge marker, there are three large silo tanks.
 The badge marker is on the ground just north of the northernmost tank.`,
    links: [
        {title: "Forged by Hellfire Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Forged_by_Hellfire_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "2"
};
