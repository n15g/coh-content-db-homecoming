import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {Neutropolis} from "../../map/neutropolis";

export const EyesToTheFuture: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "eyes-to-the-future",
    names: [{value: "Eyes to the Future"}],
    alignment: ALIGNMENT_ANY,
    mapKey: Neutropolis.key,
    location: [1854.0, 974.0, -648.0],
    badgeText: [{
        value: "From here, one can see further than even Emperor Cole. Do you see death? Darkness? Perhaps you see the coming doom of being smashed by a Tyrant or devoured by the Earth?"
    }],
    notes: "Located in [map:neutropolis] 400 yards NE of the Neuron's Reach marker, at the very top of Neuron's tower.",
    links: [
        {title: "Eyes to the Future Badge", href: "https://paragonwiki.com/wiki/Eyes_to_the_Future_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "3"
};
