import { BadgeData } from 'coh-content-db'
import { Croatoa } from '../../zone/croatoa'

export const GrimWanderer: BadgeData = {
  type: 'exploration',
  key: 'grim-wanderer',
  setTitleId: [408],
  name: 'Grim Wanderer',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `This deadly valley is witness to some of the most brutal battles in all of Croatoa.`,
  notes: 'Located on the floor of the Grim Vale between the three standing stones.',
  links: [
    { title: 'Grim Wanderer Badge', href: 'https://homecoming.wiki/wiki/Grim_Wanderer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Croatoa.key, coords: [762, 48, -2440], icon: 'badge', iconText: '1' } },
  ],
}
