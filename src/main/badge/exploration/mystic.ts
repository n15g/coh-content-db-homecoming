import { BadgeData } from 'coh-content-db'
import { Brickstown } from '../../zone/brickstown'

export const Mystic: BadgeData = {
  type: 'exploration',
  key: 'mystic',
  setTitleId: [136],
  name: 'Mystic',
  morality: 'heroic',
  zoneKey: Brickstown.key,
  loc: [-593, 32, 1378],
  badgeText: `This nexus is the intersection of two very minor Ley Lines, almost imperceptible to those without Second Sight.`,
  notes: `Located in the Seven Gates neighborhood, 330 yards east of the Crey's Folly exit on top of a circular grated catwalk.`,
  links: [
    { title: 'Mystic Badge', href: 'https://homecoming.wiki/wiki/Mystic_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '1',
}
