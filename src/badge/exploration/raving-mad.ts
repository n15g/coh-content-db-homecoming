import {ALIGNMENT_ANY, BadgeType, IBadgeData} from 'coh-content-db'
import {KallistiWharf} from "../../map/kallisti-wharf";

export const RavingMad: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: 'raving-mad',
    setTitleId: 2453,
    names: [{value: 'Raving Mad'}],
    alignment: ALIGNMENT_ANY,
    mapKey: KallistiWharf.key,
    location: [447.7, 115.4, 3204],
    badgeText: [{
        value: `Before Collier Industrial Park got its much-needed renaissance, the abandoned Collier warehouses had slowly become either self-storage parks or 'criminal-chic' locations for raves that bred influence amongst the gang patrons, namely the Skulls and the Family.`
    }],
    links: [
        {title: 'Raving Mad Badge', href: 'https://homecoming.wiki/wiki/Raving_Mad_Badge'},
    ],
    icons: [{value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png'}],
    vidiotMapKey: "5"
}
