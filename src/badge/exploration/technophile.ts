import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NovaPraetoria} from "../../map/nova-praetoria";

export const Technophile: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "technophile",
    setTitleId: 1592,
    names: [{value: "Technophile"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NovaPraetoria.key,
    location: [-6336.0, -16.0, 2.0],
    badgeText: [{
        value: "It takes a certain kind of person to find affinity with the city's Clockwork; that person is you, Technophile."
    }],
    notes: "Located in [map:nova-praetoria] in the City Maintenance Facility 210 yards N of the SE Elyssian Avenue marker (There are two markers for Elyssian Avenue).",
    links: [
        {title: "Technophile Badge", href: "https://homecoming.wiki/wiki/Technophile_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "6"
};
