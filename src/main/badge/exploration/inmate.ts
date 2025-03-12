import { BadgeData } from 'coh-content-db'
import { Brickstown } from '../../map/brickstown'

export const Inmate: BadgeData = {
  type: 'EXPLORATION',
  key: 'inmate',
  setTitle: { id: 137 },
  name: [{ value: 'Inmate' }],
  alignment: ['H'],
  mapKey: Brickstown.key,
  loc: [-1726, 24, 1153],
  badgeText: [{
    value: 'Zigursky Penitentiary is where all criminals both mundane and super-powered end up.',
  }],
  notes: 'Located in The Ziggurat neighborhood of [map:brickstown].\n'
    + '\n'
    + 'It can be found at the front entrance of the Zigursky Penitentiary located on the west side of the structure.',
  links: [
    { title: 'Inmate Badge', href: 'https://homecoming.wiki/wiki/Inmate_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '2',
}
