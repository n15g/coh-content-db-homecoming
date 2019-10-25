import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundImperial} from "../../map/underground-imperial";

export const Hoarder: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hoarder",
    setTitleId: 1649,
    names: [{value: "Hoarder"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundImperial.key,
    location: [-1101.0, 496.0, -4913.0],
    badgeText: [{
        value: "The Total Praetorian Network produces mounds of disposable media every minute, so much that there is precious little space to store it in or dispose of it safely." +
            " Beneath their sprawling campus they store leftover propaganda and obsolete entertainment, a treasure trove for the Hoarder such as yourself."
    }],
    notes: "Located in [map:underground-imperial] in a small room 225 yds. WNW of City Access B.",
    links: [
        {title: "Hoarder Badge", href: "https://paragonwiki.com/wiki/Hoarder_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "5"
};
