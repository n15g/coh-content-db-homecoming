import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {NervaArchipelago} from "../../map/nerva-archipelago";

export const TreeHugger: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "tree-hugger",
    setTitleId: 278,
    names: [{value: "Tree Hugger"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: NervaArchipelago.key,
    location: [-165.0, 12.0, -180.0],
    badgeText: [{
        value: `What mysterious purpose does this twisted old tree serve?`
    }],
    notes: `Located in [map:${NervaArchipelago.key}], in the Thorn Isle neighborhood.

It is at the northwestern base of the large thorn tree in the center of the neighborhood.`,
    links: [
        {title: "Tree Hugger Badge", href: "https://homecoming.wiki/wiki/Tree_Hugger_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "5"
};
