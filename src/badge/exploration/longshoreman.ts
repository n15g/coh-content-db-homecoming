import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Neutropolis} from "../../map/neutropolis";

export const Longshoreman: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "longshoreman",
    names: [
        {type: Alternate.M, value: "Longshoreman"},
        {type: Alternate.F, value: "Longshorewoman"}
    ],
    alignment: ALIGNMENT_ANY,
    mapKey: Neutropolis.key,
    location: [2924.0, -56.0, 1375.0],
    badgeText: [{
        value: "Praetoria is perhaps the only exporter of high tech goods still standing since the rise of the Hamidon." +
            " From these docks thousands of tons of weapons, heavy equipment, and humanitarian supplies leave daily." +
            " The Imperial Defense Force provides escort security for the ships once they've left the safety of Neutropolis."
    }],
    notes: "Located in [map:neutropolis] on the docks 575 yards SSW of the Neuron's Reach marker.",
    links: [
        {title: "Longshoreman Badge", href: "https://paragonwiki.com/wiki/Longshoreman_Badge"},
        {title: "Longshorewoman Badge", href: "https://paragonwiki.com/wiki/Longshorewoman_Badge"},
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "4"
};
