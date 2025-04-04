import { BadgeData } from 'coh-content-db'
import { EchoAtlasPark } from '../../zone/echo-atlas-park'

export const CityTraveler: BadgeData = {
  type: 'exploration',
  key: 'city-traveler',
  setTitleId: [2368],
  name: 'City Traveler',
  morality: 'heroic',
  badgeText: `Whether transporting heroes on their way to a mission or civilians to their homes, the Paragon Transit Authority has a record of efficiency and safety second to none.`,
  zoneKey: EchoAtlasPark.key,
  loc: [581.5, 74, -1363.4],
  notes: `Located inside the Paragon Transit Station, in the west alcove.`,
  links: [
    { title: 'Echo: Atlas Park Badge Guide', href: 'https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '3',
}
