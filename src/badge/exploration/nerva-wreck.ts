import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {NervaArchipelago} from "../../map/nerva-archipelago";

export const NervaWreck: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "nerva-wreck",
    names: [{value: "Nerva Wreck"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: NervaArchipelago.key,
    location: [1388.0, 10.0, 2876.0],
    badgeText: [{
        value: `You have visited the famous Nerva Wreck. What strange creature might have caused this disaster?`
    }],
    notes: `Located in [map:${NervaArchipelago.key}], in the Primeva neighborhood.

It is located on the lowest rock outcropping next to the shipwreck in the mouth of the river that runs into the largest island of Primeva.
 It is approximately 533 yrds SE of the Primeva marker and/or the northernmost Quartermaster.`,
    links: [
        {title: "Nerva Wreck Badge", href: "https://paragonwiki.com/wiki/Nerva_Wreck_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "3"
};
