import { BadgeData } from 'coh-content-db'
import { KingsRow } from '../../zone/kings-row'

export const Smokey: BadgeData = {
  type: 'exploration',
  key: 'smokey',
  setTitleId: [100],
  name: 'Smokey',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `King Garment Works dominated the Kings Row economy for years. These smoke stacks were part of their manufacturing facility.`,
  notes: 'Located in Kings Row, in the far NE corner of the Royal Refinery neighborhood.',
  links: [
    { title: 'Smokey Badge', href: 'https://homecoming.wiki/wiki/Smokey_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KingsRow.key, coords: [-3042, -41, -1358], icon: 'badge', iconText: '5' } },
  ],
}
