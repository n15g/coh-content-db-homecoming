import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheStormPalace} from "../../map/the-storm-palace";

export const Tormented: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "tormented",
    names: [{value: "Tormented"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheStormPalace.key,
    location: [-8161.0, 1101.0, 5762.0],
    badgeText: [{
        value: `The Shadow Shard is a prison created to house a powerful entity, an entity tormented by its imprisonment.
Its sense of indignity, of injustice, has been concentrated here to such a degree that it has become part of the dimension.
You can feel the entity's raw emotion flow through you; you have felt it from the very moment you arrived and it has been chipping away at your sense of self ever since.
Remaining here risks making these emotions part of yourself; or worse, you risk being subsumed by the Shadow Shard, losing all identity and will by becoming one with Rularuu.`
    }],
    notes: `Located in [map:${TheStormPalace.key}] 0.59 miles SSE of the Lock of Hatred marker and 0.69 miles NE of the Lock of Malice marker.
It is on the west side of the eastern-most island of Lock of Torment.`,
    links: [
        {title: "Tormented Badge", href: "https://paragonwiki.com/wiki/Tormented_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "4"
};
