import {ALIGNMENT_ANY, BadgeType, IBadgeData} from 'coh-content-db'
import {KallistiWharf} from "../../map/kallisti-wharf";

export const FueledByGreed: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: 'fueled-by-greed',
    setTitleId: 2452,
    names: [{value: 'Fueled By Greed'}],
    alignment: ALIGNMENT_ANY,
    mapKey: KallistiWharf.key,
    location: [1562.5, 42, 5176.1],
    badgeText: [{
        value: `What started as Lou's Auto Shop was eventually bought by his brother-in-law, Manny, and turned into a full-service fuel station and repair shop.
The station suffered a major fire in 1974, claiming Lou's life - Manny was investigated for insurance fraud and arson, and the station became eminent domain of the Wharf in 1997.
When the Rikti attacked, plans for the station were sidelined and eventually lost entirely.`
    }],
    links: [
        {title: 'Fueled By Greed Badge', href: 'https://homecoming.wiki/wiki/Fueled_By_Greed_Badge'},
    ],
    icons: [{value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png'}],
    vidiotMapKey: "4"
}
