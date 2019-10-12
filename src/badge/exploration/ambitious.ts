import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NovaPraetoria} from "../../map/nova-praetoria";

export const Ambitious: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "ambitious",
    names: [{value: "Ambitious"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NovaPraetoria.key,
    location: [-5398.0, 190.0, -255.0],
    badgeText: [{
        value: "Even in these strange and uncertain times there are those who still reach for the sky."
    }],
    notes: "Located in [map:nova-praetoria] on top of Emperor Cole's tower in Magisterium.",
    links: [
        {title: "Ambitious Badge", href: "https://paragonwiki.com/wiki/Ambitious_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "1"
};
