import { BadgeData } from 'coh-content-db'
import { Faultline } from '../../map/faultline'

export const DrownedRat: BadgeData = {
  type: 'EXPLORATION',
  key: 'drowned-rat',
  setTitle: { id: 637 },
  name: [{ value: 'Drowned Rat' }],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `The dam burst here due to exceptionally strong seismic activity.` },
    { alignment: 'V', value: `This marks the location that the dam burst due to exceptionally strong seismic activity.` },
  ],
  mapKey: Faultline.key,
  loc: [150, -51, 2360],
  notes: 'The Drowned Rat Badge is in the Overflow neighborhood of [map:${Faultline.key}] located on scaffolding against the dam just above a large leak in its face.',
  links: [
    { title: 'Drowned Rat Badge', href: 'https://homecoming.wiki/wiki/Drowned_Rat_Badge' },
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '3',
}
