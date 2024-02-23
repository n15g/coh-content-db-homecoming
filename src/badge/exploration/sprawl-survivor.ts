import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {AbandonedSewerNetwork} from "../../map/abandoned-sewer-network";
import {SewerNetwork} from "../../map/sewer-network";

export const SprawlSurvivor: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "sprawl-survivor",
    setTitleId: 1824,
    names: [{value: "Sprawl Survivor"}],
    alignment: ALIGNMENT_HERO,
    mapKey: AbandonedSewerNetwork.key,
    location: [64.0, 0.0, 3072.0],
    badgeText: [{
        value: "Many people, of a particular mindset, find they cannot tolerate the dirt and noise of Skyway City's sprawl." +
            " It takes someone of singular courage (or foolhardiness) to see the Abandoned Sewer Network as the place they would like to escape to." +
            " But down here, in the cool confines of the tunnels, away from the noise of Skyway, a kind of peace can be achieved."
    }],
    notes: `Located in [map:abandoned-sewer-network] 79 feet northwest of the [${SewerNetwork.key}] transfer point in Skyway City Network, right at the exit of the room.`,
    links: [
        {title: "Sprawl Survivor Badge", href: "https://homecoming.wiki/wiki/Sprawl_Survivor_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "4"
};
