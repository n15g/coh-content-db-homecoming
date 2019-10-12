import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNeutropolis} from "../../map/underground-neutropolis";

export const Cluttered: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "cluttered",
    names: [{value: "Cluttered"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNeutropolis.key,
    location: [-2539.0, -1216.0, -3033.0],
    badgeText: [{
        value: "Praetor Berry's dizzying research speed accomplishes much, but tends to leave unfinished projects and prototypes in its wake." +
            " Some of those half-baked notions end up here. Occasionally, a few get up and walk away."
    }],
    notes: "Located in [map:underground-neutropolis] approximately 105 yds north of the Loyalist Sewer Access.",
    links: [
        {title: "Cluttered Badge", href: "https://paragonwiki.com/wiki/Cluttered_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "2"
};
