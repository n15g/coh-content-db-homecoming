import { BadgeData } from 'coh-content-db'
import { PeregrineIsland } from '../../zone/peregrine-island'

export const CauseForConcern: BadgeData = {
  type: 'exploration',
  key: 'cause-for-concern',
  setTitleId: [1573],
  name: 'Cause for Concern',
  morality: 'paragon-city-access',
  badgeText: `Visitors to Portal Corp are usually a little concerned when they see these defensive outposts put up near the elevators down to the portals.
Tour guides insist they are "just for show", though the occasional "all clear" heard from military radios nearby doesn't help much.`,
  notes: `Located under the metal detector in the lobby of the center Portal Corp building.`,
  links: [
    { title: 'Cause for Concern Badge', href: 'https://homecoming.wiki/wiki/Cause_for_Concern_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PeregrineIsland.key, coords: [-1767, -208, -3746] }, vidiotMapKey: '3' },
  ],
}
