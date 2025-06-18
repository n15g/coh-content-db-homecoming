import {ALIGNMENT_ANY, BadgeType, IBadgeData} from 'coh-content-db'
import {KallistiWharf} from "../../map/kallisti-wharf";

export const MarkedOut: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: 'marked-out',
    setTitleId: 2454,
    names: [{value: 'Marked Out'}],
    alignment: ALIGNMENT_ANY,
    mapKey: KallistiWharf.key,
    location: [1891.5, 41.8, 971.7],
    badgeText: [{
        value: `This site commemorates the final protest held against developer-tycoon Mark Maxwell's aggressive demolitions of the theatres in the Row. The last theatre, named The Redwood, stood here and shielded more than 500 protestors in its final days.`
    }],
    links: [
        {title: 'Marked Out Badge', href: 'https://homecoming.wiki/wiki/Marked_Out_Badge'},
    ],
    icons: [{value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png'}],
    vidiotMapKey: "6"
}
