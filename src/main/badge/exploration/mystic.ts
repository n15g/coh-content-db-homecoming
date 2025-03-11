import { BadgeData } from 'coh-content-db'
import { Brickstown } from '../../map/brickstown'

export const Mystic: BadgeData = {
  type: 'EXPLORATION',
  key: 'mystic',
  setTitle: { id: 136 },
  name: [{ value: 'Mystic' }],
  alignment: ['H'],
  mapKey: Brickstown.key,
  loc: [-593, 32, 1378],
  badgeText: [{
    value: 'This nexus is the intersection of two very minor Ley Lines, almost imperceptible to those without Second Sight.',
  }],
  notes: 'Located in Seven Gates neighborhood of [map:brickstown]. It can be found 330 yards east of the Crey\'s Folly exit on top of a circular grated catwalk.',
  links: [
    { title: 'Mystic Badge', href: 'https://homecoming.wiki/wiki/Mystic_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '1',
}
