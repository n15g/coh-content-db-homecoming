import { BadgeData } from 'coh-content-db'
import { SharkheadIsle } from '../../zone/sharkhead-isle'

export const UnwelcomeGuest: BadgeData = {
  type: 'exploration',
  key: 'unwelcome-guest',
  setTitleId: [1497],
  name: 'Unwelcome Guest',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `This Council base has managed to maintain its foothold within Sharkhead despite numerous attacks from several groups.
These days, the biggest threats are the 5th Column raids and exposing sleeper agents among Council ranks.`,
  notes: `Located in The Pit neighborhood, at the entrance of the Council base 270 yards east of the neighborhood marker.`,
  links: [
    { title: 'Unwelcome Guest Badge', href: 'https://homecoming.wiki/wiki/Unwelcome_Guest_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SharkheadIsle.key, coords: [-634, 1, 1437], icon: 'badge', iconText: '6' } },
  ],
}
