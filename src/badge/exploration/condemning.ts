import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundImperial} from "../../map/underground-imperial";

export const Condemning: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "condemning",
    setTitleId: 1646,
    names: [{value: "Condemning"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundImperial.key,
    location: [-815.0, 330.0, -6169.0],
    badgeText: [{
        value: "It is no small thing to make the long perilous journey to the levels beneath the Behavioral Adjustment Facility." +
            " The route is filled with hostile PPD trained to shoot first and never ask questions." +
            " You have entered a realm that is the last many will see: Do you seek to free the condemned from their fate, or facilitate their demise?"
    }],
    notes: "Located in [map:underground-imperial] on the ferry barge in the furthest north room, just east of the crates.",
    links: [
        {title: "Condemning Badge", href: "https://paragonwiki.com/wiki/Condemning_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "2"
};
