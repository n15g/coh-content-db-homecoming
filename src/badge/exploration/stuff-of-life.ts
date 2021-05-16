import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {Neutropolis} from "../../map/neutropolis";

export const StuffOfLife: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "stuff-of-life",
    setTitleId: 1729,
    names: [{value: "Stuff of Life"}],
    alignment: ALIGNMENT_ANY,
    mapKey: Neutropolis.key,
    location: [2228.0, -58.0, -649.0],
    badgeText: [{
        value: "Praetor Berry's choice of decorations always hearken back to his reason d'etre - unlocking the secrets of the flesh held in sinew, cell, and DNA."
    }],
    notes: "Located in [map:neutropolis] next to the DNA sculpture in the Neuron's Reach neighborhood, 74 yards west of Battle Maiden.",
    links: [
        {title: "Stuff of Life Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Stuff_of_Life_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "7"
};
