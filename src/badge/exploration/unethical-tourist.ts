import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {NervaArchipelago} from "../../map/nerva-archipelago";

export const UnethicalTourist: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "unethical-tourist",
    setTitleId: 1501,
    names: [{value: "Unethical Tourist"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: NervaArchipelago.key,
    location: [-644.0, 16.0, 6712.0],
    badgeText: [{
        value: `Crey Corporation has been known to invite tourist groups to see the experiments caged in these pens.
They justify their actions by claiming the research is to better understand the various subjects contained here.`
    }],
    notes: `Located in [map:${NervaArchipelago.key}], on the eastern island of the Crimson Cove neighborhood.

It is in the middle of the southwestern specimen hangar, 597 yards east of the neighborhood marker.`,
    links: [
        {title: "Unethical Tourist Badge", href: "https://homecoming.wiki/wiki/Unethical_Tourist_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "6"
};
