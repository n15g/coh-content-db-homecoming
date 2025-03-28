import { BadgeData } from 'coh-content-db'
import { Faultline } from '../../zone/faultline'

export const Riveting: BadgeData = {
  type: 'EXPLORATION',
  key: 'riveting',
  setTitle: { id: 2404 },
  name: [{ value: 'Riveting' }],
  alignment: ['H'],
  badgeText: [{ value: `The Rusty Rivet, a local tavern, caters to construction crews. Unfortunately, this is also where large brawls between The Lost and anyone within the area tend to break out. Paragon Police are frequently called in to settle disputes.` }],
  zoneKey: Faultline.key,
  loc: [1261, 31, -1788],
  notes: 'In the NW Corner of the map on 70 yds NW of Mirror Spirit in front of the The Rusty Rivet bar.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '5',
}
