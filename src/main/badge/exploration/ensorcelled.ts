import { BadgeData } from 'coh-content-db'
import { Croatoa } from '../../zone/croatoa'

export const Ensorcelled: BadgeData = {
  type: 'EXPLORATION',
  key: 'ensorcelled',
  setTitle: { id: 410 },
  name: [{ value: 'Ensorcelled' }],
  alignment: ['H'],
  zoneKey: Croatoa.key,
  loc: [1018, 159, -1090],
  badgeText: [{
    value: 'The Cabal have developed an attachment to this old, gnarled tree. Some heroes even say they are conducting dark experiments beneath its roots.',
  }],
  notes: 'Located on a low branch of the large leafless tree 360 yards to the west of War Witch and 76 yards north of the Sunset Ridge marker.',
  links: [
    { title: 'Ensorcelled Badge', href: 'https://homecoming.wiki/wiki/Ensorcelled_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '3',
}
