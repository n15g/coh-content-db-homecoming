import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHive} from "../../map/the-hive";
import {Eden} from "../../map/eden";

export const ForestOfStone: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "forest-of-stone",
    setTitleId: 1853,
    names: [{value: "Forest of Stone"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHive.key,
    location: [703.0, 0.0, -3195.0],
    badgeText: [{
        value: `Towering pillars of stone abound in this region, as they do in other areas where the Devouring Earth have launched full-scale attacks.
It has become their unwelcome calling card.
The devastation they wreak is extensive, as they thrust upward from the ground toppling buildings, shattering roadways, and punching through even the most solidly built human-made constructs.`
    }],
    notes: `Located in [map:${TheHive.key}] 0.78 miles northwest of the [map:${Eden.key}] transfer point, in a valley close to a barricade of monsters just off the northwest edge of the crater.`,
    links: [
        {title: "Forest of Stone Badge", href: "https://homecoming.wiki/wiki/Forest_of_Stone_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "8"
};
