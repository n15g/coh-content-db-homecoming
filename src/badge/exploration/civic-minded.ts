import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NovaPraetoria} from "../../map/nova-praetoria";

export const CivicMinded: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "civic-minded",
    setTitleId: 1402,
    names: [{value: "Civic Minded"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NovaPraetoria.key,
    location: [-4862.0, 33.0, -256.0],
    badgeText: [{
        value: "This is the heart of Praetoria. Emperor Cole and his Praetors have put great energy into keeping eyes and ears open for the safety of their citizens."
    }],
    notes: "Located in [map:nova-praetoria] in the center of the plaza between Praetor Duncan and Praetor White.",
    links: [
        {title: "Civic Minded Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Civic_Minded_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "3"
};
