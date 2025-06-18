import {ALIGNMENT_ANY, BadgeType, IBadgeData} from 'coh-content-db'
import {KallistiWharf} from "../../map/kallisti-wharf";

export const InTheirPrime: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: 'in-their-prime',
    setTitleId: 2450,
    names: [{value: 'In Their Prime'}],
    alignment: ALIGNMENT_ANY,
    mapKey: KallistiWharf.key,
    location: [6465.4, 50.2, 1732.1],
    badgeText: [{
        value: `Padma Wadkar was not only a brilliant doctor but also moonlit as the heroine 'Brightshield', who selflessly sacrificed herself during the Rikti War to keep a portal open for survivors as long as she could.
Brightshield herself did not use the portal, even as bombs fell and buildings nearby collapsed.
Her body was recovered days later, and her identity was revealed to the public a few weeks afterward.
The new hospital built here is dedicated to her memory`
    }],
    links: [
        {title: 'In Their Prime Badge', href: 'https://homecoming.wiki/wiki/In_Their_Prime_Badge'},
    ],
    icons: [{value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png'}],
    vidiotMapKey: "2"
}
