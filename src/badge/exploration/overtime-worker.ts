import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TalosIsland} from "../../map/talos-island";

export const OvertimeWorker: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "overtime-worker",
    setTitleId: 1549,
    names: [{value: "Overtime Worker"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TalosIsland.key,
    location: [-3707.0, 96.0, 8629.0],
    badgeText: [{
        value: "After Dark Astoria was taken over by the Banished Pantheon, the construction workers of Paragon were ordered to demolish the road leading into the cursed city." +
            " The construction workers put in major overtime work to make it happen, and by week's end the road was gone, symbolizing that the city had left Astoria" +
            " to the works of the Banished Pantheon."
    }],
    notes: "Located in the Argo Highway neighborhood of [map:talos-island], 218 yards west of the Dark Astoria gate.",
    links: [
        {title: "Overtime Worker Badge", href: "https://paragonwiki.com/wiki/Overtime_Worker_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "7"
};
