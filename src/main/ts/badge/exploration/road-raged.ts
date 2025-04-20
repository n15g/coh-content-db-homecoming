import { BadgeData, contactLink } from 'coh-content-db'
import { MayhemSkywayCity } from '../../zone/mayhem-skyway-city'
import { LordSchweinzer } from '../../contact/lord-schweinzer'

export const RoadRaged: BadgeData = {
  type: 'exploration',
  key: 'road-raged',
  setTitleId: [557],
  name: 'Road Raged',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'Hair pin risers like this road in Skyway City can incite rage even in pedestrians.',
  notes: `Located in the middle of the road, at the main switchback in the center of the map.

Out-levelled Mayhem missions can be accessed via ${contactLink(LordSchweinzer)}.`,
  links: [
    { title: 'Road Raged Badge', href: 'https://homecoming.wiki/wiki/Road_Raged_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MayhemSkywayCity.key, coords: [-646, 42, -4031], icon: 'badge', iconText: '1' } },
  ],
}
