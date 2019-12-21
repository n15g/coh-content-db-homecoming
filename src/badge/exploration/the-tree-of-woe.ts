import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {TheAbyss} from "../../map/the-abyss";

export const TheTreeOfWoe: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "the-tree-of-woe",
    setTitleId: 1866,
    names: [{value: "The Tree of Woe"}],
    alignment: ALIGNMENT_ANY,
    mapKey: TheAbyss.key,
    location: [1399.0, -44.0, -1499.0],
    badgeText: [{
        value: `According to the briefing, some of the facility's survivors fled to this location in a last ditch effort to avoid the inevitable.
If you look among the grass you can still see some dark splatters that might be blood and maybe a bone fragment or two.
It gives the place an air of desperation and terror that is not entirely unfamiliar.`
    }],
    notes: `Located in [map:${TheAbyss.key}], 871 yards northwest of the Grandville transfer point,
at the base of a tree where the road circles around at the westernmost developed portion of the zone.`,
    links: [
        {title: "The Tree of Woe Badge", href: "https://paragonwiki.com/wiki/The_Tree_of_Woe_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
