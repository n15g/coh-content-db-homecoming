import { BadgeData } from 'coh-content-db'
import { Brickstown } from '../../zone/brickstown'

export const Inmate: BadgeData = {
  type: 'exploration',
  key: 'inmate',
  setTitleId: [137],
  name: 'Inmate',
  morality: 'paragon-city-access',
  badgeText: `Zigursky Penitentiary is where all criminals both mundane and super-powered end up.`,
  notes: `Located in The Ziggurat neighborhood, at the front entrance of the Zigursky Penitentiary on the west side of the structure.`,
  links: [
    { title: 'Inmate Badge', href: 'https://homecoming.wiki/wiki/Inmate_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Brickstown.key, coords: [-1726, 24, 1153], icon: 'badge', iconText: '2' } },
  ],
}
