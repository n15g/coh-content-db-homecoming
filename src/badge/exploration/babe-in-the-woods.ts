import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHive} from "../../map/the-hive";

export const BabeInTheWoods: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "babe-in-the-woods",
    names: [{value: "Babe in the Woods"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHive.key,
    location: [-2071.0, 0.0, -746.0],
    badgeText: [{
        value: `Hulking spires of stone splinter the landscape all around you, at this, the outermost edge of The Hive.
So this is what a world re-shaped by the Devouring Earth would look like—a place completely inhospitable to humanity, a land rendered hostile to your very presence.
You overcome a sudden feeling of insignificance as you gaze upon Hamidon's creation.`
    }],
    notes: `Located in [map:${TheHive.key}] 144 yards west and a bit north of the Eden transfer point, near the middle of the valley leading into the zone.`,
    links: [
        {title: "Babe in the Woods Badge", href: "https://paragonwiki.com/wiki/Babe_in_the_Woods_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "3"
};
