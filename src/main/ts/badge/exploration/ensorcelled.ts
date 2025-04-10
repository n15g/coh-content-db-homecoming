import { BadgeData } from 'coh-content-db'
import { Croatoa } from '../../zone/croatoa'

export const Ensorcelled: BadgeData = {
  type: 'exploration',
  key: 'ensorcelled',
  setTitleId: [410],
  name: 'Ensorcelled',
  morality: 'paragon-city-access',
  badgeText: `The Cabal have developed an attachment to this old, gnarled tree. Some heroes even say they are conducting dark experiments beneath its roots.`,
  notes: 'Located on a low branch of the large leafless tree 360 yards to the west of War Witch and 76 yards north of the Sunset Ridge marker.',
  links: [
    { title: 'Ensorcelled Badge', href: 'https://homecoming.wiki/wiki/Ensorcelled_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Croatoa.key, coords: [1018, 159, -1090], icon: 'badge', iconText: '3' } },
  ],
}
