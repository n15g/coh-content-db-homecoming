import { BadgeData } from 'coh-content-db'
import { Brickstown } from '../../zone/brickstown'

export const Inmate: BadgeData = {
  type: 'exploration',
  key: 'inmate',
  setTitleId: [137],
  name: 'Inmate',
  morality: 'heroic',
  zoneKey: Brickstown.key,
  loc: [-1726, 24, 1153],
  badgeText: `Zigursky Penitentiary is where all criminals both mundane and super-powered end up.`,
  notes: `Located in The Ziggurat neighborhood, at the front entrance of the Zigursky Penitentiary on the west side of the structure.`,
  links: [
    { title: 'Inmate Badge', href: 'https://homecoming.wiki/wiki/Inmate_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '2',
}
