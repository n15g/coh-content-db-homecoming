import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {NervaArchipelago} from "../../map/nerva-archipelago";

export const WatcherOnTheKnoll: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "watcher-on-the-knoll",
    names: [{value: "Watcher on the Knoll"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: NervaArchipelago.key,
    location: [-93.0, 85.0, 5434.0],
    badgeText: [{
        value: `A failed assassination on Ms. Liberty was made from the top of this pillar.`
    }],
    notes: `Located in [map:${NervaArchipelago.key}], in the northernmost island of the Crimson Cove neighborhood.

The marker is located between the feet of the statue on the right (south) of the large building, on top of the plinth.`,
    links: [
        {title: "Watcher on the Knoll Badge", href: "https://paragonwiki.com/wiki/Watcher_on_the_Knoll_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "1"
};
