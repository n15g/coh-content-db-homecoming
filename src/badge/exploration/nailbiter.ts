import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNeutropolis} from "../../map/underground-neutropolis";

export const Nailbiter: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "nailbiter",
    setTitleId: 1747,
    names: [{value: "Nailbiter"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNeutropolis.key,
    location: [238.0, -1216.0, -2189.0],
    badgeText: [{
        value: "This PPD interrogation and holding area is littered with the signs of harsh treatment." +
            " Dried bodily fluids, ripped off fingernails, and a few human teeth mark this area as a place you don't want to wind up in."
    }],
    notes: "Located in [map:underground-neutropolis] 415 yards south of City Access C.",
    links: [
        {title: "Nailbiter Badge", href: "https://paragonwiki.com/wiki/Nailbiter_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "7"
};
