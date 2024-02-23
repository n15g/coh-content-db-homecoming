import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NovaPraetoria} from "../../map/nova-praetoria";

export const Ambitious: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "ambitious",
    setTitleId: 1400,
    names: [{value: "Ambitious"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NovaPraetoria.key,
    location: [-5420.9, 1088.6, -255.3],
    badgeText: [{
        value: "Even in these strange and uncertain times there are those who still reach for the sky."
    }],
    notes: "Located in [map:nova-praetoria] on top of Emperor Cole's tower in Magisterium.",
    links: [
        {title: "Ambitious Badge", href: "https://homecoming.wiki/wiki/Ambitious_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "1"
};
