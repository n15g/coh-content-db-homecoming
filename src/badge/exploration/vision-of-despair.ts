import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Boomtown} from "../../map/boomtown";

export const VisionOfDespair: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "vision-of-despair",
    names: [{value: "Vision of Despair"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Boomtown.key,
    location: [-754.0, 0.0, -595.0],
    badgeText: [{value: "An unnatural feeling of dread permeates the area in what is now called the Pit of Despair."}],
    notes: "The Vision of Despair Badge is located in a pit 470 yards east of the Grenadier Village marker - or 1.19 miles NNW of the gate to Steel Canyon." +
        " It is located between the Grenadier neighborhood and the Cannonade neighborhood of Boomtown." +
        "\n\nLooking east from the Grenadier marker, one can see a tunnel with a road over it. Left (north) of the tunnel, there is a long wall that leads into a dead-end pit at the bottom of" +
        " three high walls. The badge marker is at the end of that pit next to an old dumpster. The marker is in that pit.",
    links: [
        {title: "Vision of Despair Badge", href: "https://paragonwiki.com/wiki/Vision_of_Despair_Badge"}
    ],
    icons: [{value: "core.exploration.hero"}],
    vidiotMapKey: "3"
};
