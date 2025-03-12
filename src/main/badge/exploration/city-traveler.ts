import { BadgeData } from 'coh-content-db'
import { EchoAtlasPark } from '../../map/echo-atlas-park'

export const CityTraveler: BadgeData = {
  type: 'EXPLORATION',
  key: 'city-traveler',
  setTitle: { id: 2368 },
  name: [{ value: 'City Traveler' }],
  alignment: ['H'],
  badgeText: [{ value: `Whether transporting heroes on their way to a mission or civilians to their homes, the Paragon Transit Authority has a record of efficiency and safety second to none.` }],
  mapKey: EchoAtlasPark.key,
  loc: [581.5, 74, -1363.4],
  notes: `Located inside the Paragon Transit Station, in the west alcove.`,
  links: [
    { title: 'Echo: Atlas Park Badge Guide', href: 'https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '3',
}
