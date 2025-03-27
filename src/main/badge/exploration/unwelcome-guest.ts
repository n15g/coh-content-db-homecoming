import { BadgeData, mapLink } from 'coh-content-db'
import { SharkheadIsle } from '../../map/sharkhead-isle'

export const UnwelcomeGuest: BadgeData = {
  type: 'EXPLORATION',
  key: 'unwelcome-guest',
  setTitle: { id: 1497 },
  name: [{ value: 'Unwelcome Guest' }],
  alignment: ['V'],
  mapKey: SharkheadIsle.key,
  loc: [-634, 1, 1437],
  badgeText: [{
    value: `This Council base has managed to maintain its foothold within Sharkhead despite numerous attacks from several groups.
            These days, the biggest threats are the 5th Column raids and exposing sleeper agents among Council ranks.`,
  }],
  notes: `Located in ${mapLink(SharkheadIsle)}, in The Pit neighborhood.

It is at the entrance of the Council base 270 yards east of the neighborhood marker.`,
  links: [
    { title: 'Unwelcome Guest Badge', href: 'https://homecoming.wiki/wiki/Unwelcome_Guest_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '6',
}
