import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { MayhemSkywayCity } from '../../zone/mayhem-skyway-city'

export const RoadRaged: BadgeData = {
  type: 'exploration',
  key: 'road-raged',
  setTitleId: [557],
  name: 'Road Raged',
  morality: 'rogue-isles-access',
  badgeText: 'Hair pin risers like this road in Skyway City can incite rage even in pedestrians.',
  notes: `Located in the middle of the road, at the main switchback in the center of the map.

${SAFEGUARD_MAYHEM_CONTACT_FRAGMENT}`,
  links: [
    { title: 'Road Raged Badge', href: 'https://homecoming.wiki/wiki/Road_Raged_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MayhemSkywayCity.key, coords: [-646, 42, -4031] }, vidiotMapKey: '1' },
  ],
}
