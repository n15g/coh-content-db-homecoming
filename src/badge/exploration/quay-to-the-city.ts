import {ALIGNMENT_ANY, BadgeType, IBadgeData} from 'coh-content-db'
import {KallistiWharf} from "../../map/kallisti-wharf";

export const QuayToTheCity: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: 'quay-to-the-city',
    setTitleId: 2455,
    names: [{value: 'Quay to the City'}],
    alignment: ALIGNMENT_ANY,
    mapKey: KallistiWharf.key,
    location: [2143.5, 12.4, -547.1],
    badgeText: [{
        value: `Kallisti Marina is all that is left of a larger harbor that originally gave Kallisti Wharf half of its name.
The first half, Kallisti, is a greek word that means 'The prettiest one'.
Back when it gained the moniker, there were many Greek immigrants to the area, and it was noted for its placid, beautiful waters, bright blue, full of fish and free of the pollution that would come later.
Before Independence Port, this Marina was the first port of call for imports and immigrants alike.`
    }],
    links: [
        {title: 'Quay to the City Badge', href: 'https://homecoming.wiki/wiki/Quay_To_The_City_Badge'},
    ],
    icons: [{value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png'}],
    vidiotMapKey: "7"
}
