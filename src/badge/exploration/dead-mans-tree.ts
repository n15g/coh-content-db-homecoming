import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {StMartial} from "../../map/st-martial";

export const DeadMansTree: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "dead-mans-tree",
    names: [{value: "Dead Man's Tree"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: StMartial.key,
    location: [1670.0, 121.0, -2228.0],
    badgeText: [{
        value: `This dead tree within St. Martial is said to be haunted by the ghost of a man who tried to chop it down.
 People say that if you look closely, you can see glimpses of the man's skeleton, waiting to be released from his torture...`
    }],
    notes: `Located in [map:${StMartial.key}], in the Black Mariah neighborhood.

It is just a few yards south of the tree in the northwest corner of the neighborhood.`,
    links: [
        {title: "Dead Man's Tree Badge", href: "https://paragonwiki.com/wiki/Dead_Man%27s_Tree_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "5"
};
