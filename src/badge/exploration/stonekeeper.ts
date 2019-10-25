import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {StMartial} from "../../map/st-martial";

export const Stonekeeper: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "stonekeeper",
    setTitleId: 281,
    names: [{value: "Stonekeeper"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: StMartial.key,
    location: [-2560.0, 116.0, 3009.0],
    badgeText: [{
        value: `What strange purpose do these glyphs serve?`
    }],
    notes: `Located in [map:${StMartial.key}], in the Babylon neighborhood.

The marker is at ground level inside the southernmost obelisk located due southeast of the Golden Giza casino. The marker itself is not visible due to the obelisk.`,
    links: [
        {title: "Stonekeeper Badge", href: "https://paragonwiki.com/wiki/Stonekeeper_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "3"
};
