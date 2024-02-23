import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {NervaArchipelago} from "../../map/nerva-archipelago";

export const LockedAndLoaded: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "locked-and-loaded",
    setTitleId: 275,
    names: [{value: "Locked and Loaded"}],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `This is the spot where many Longbow Agents have trained to take villains down.`},
        {type: Alternate.V, value: `This is the spot where many Longbow Agents have trained to take you down.`}
    ],
    mapKey: NervaArchipelago.key,
    location: [3286.0, 126.0, 3645.0],
    notes: `Located in [map:${NervaArchipelago.key}], in the Agincourt neighborhood.

It is located under a shed with mesh-net walls 120 yards north-northeast of the Agincourt marker.`,
    links: [
        {title: "Locked and Loaded Badge", href: "https://homecoming.wiki/wiki/Locked_and_Loaded_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "2"
};
