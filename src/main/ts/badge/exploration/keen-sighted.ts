import { BadgeData } from 'coh-content-db'
import { KingsRow } from '../../zone/kings-row'

export const KeenSighted: BadgeData = {
  type: 'exploration',
  key: 'keen-sighted',
  setTitleId: [99],
  name: 'Keen Sighted',
  morality: 'paragon-city-access',
  badgeText: `Manticore, one of the Surviving Eight, was first sighted at this location after keeping to the shadows for months.`,
  notes: 'Located on a high voltage tower 230 yards to the SE of the Monorail.',
  links: [
    { title: 'Keen Sighted Badge', href: 'https://homecoming.wiki/wiki/Keen_Sighted_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KingsRow.key, coords: [-2176, 97, 1142], icon: 'badge', iconText: '4' } },
  ],
}
