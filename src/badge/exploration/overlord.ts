import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {Grandville} from "../../map/grandville";

export const Overlord: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "overlord",
    setTitleId: 283,
    names: [{value: "Overlord"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: Grandville.key,
    location: [1358.0, -441.0, -596.0],
    badgeText: [{
        value: `You've visited the beach outside the Grandville city walls, where Lord Recluse viciously repelled an invasion of Longbow landing craft.`
    }],
    notes: `Located in [map:${Grandville.key}], in the Gutter neighborhood (but outside the main walls).

From The Gutter marker, head one tick right of northeast on the compass (slightly east of due northeast) until you reach the door for beach access and go outside.
On the other side of the door, head due east until you reach a small concrete bunker just before reaching the beach.
If you reach the sand, you've got too far—turn around and you will see the bunker.
The badge marker is located on top of the bunker, just above the door.`,
    links: [
        {title: "Overlord Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Overlord_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "1"
};
