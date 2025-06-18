import {ALIGNMENT_ANY, BadgeType, IBadgeData} from 'coh-content-db'
import {KallistiWharf} from "../../map/kallisti-wharf";

export const ProtestTooMuch: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: 'protest-too-much',
    setTitleId: 2451,
    names: [{value: 'Protest Too Much'}],
    alignment: ALIGNMENT_ANY,
    mapKey: KallistiWharf.key,
    location: [5875.5, 47.9, 4979.9],
    badgeText: [{
        value: `At this location in June of 2018, a man by the name of Kieran Holt, who was later determined to be wrongfully detained, was assaulted by members of the PPD for resisting arrest while protesting their corruption.
Holt died, hours later, in his holding cell from his injuries. The resulting media coverage led to the swift loss of public trust in the local PPD and their removal, in favor of Blackwing Industries after heated debates.`
    }],
    links: [
        {title: 'Protest Too Much Badge', href: 'https://homecoming.wiki/wiki/Protest_Too_Much_Badge'},
    ],
    icons: [{value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png'}],
    vidiotMapKey: "3"
}
