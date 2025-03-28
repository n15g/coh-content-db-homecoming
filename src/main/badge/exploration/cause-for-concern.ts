import { BadgeData, zoneLink } from 'coh-content-db'
import { PeregrineIsland } from '../../zone/peregrine-island'

export const CauseForConcern: BadgeData = {
  type: 'EXPLORATION',
  key: 'cause-for-concern',
  setTitle: { id: 1573 },
  name: [{ value: 'Cause for Concern' }],
  alignment: ['H'],
  zoneKey: PeregrineIsland.key,
  loc: [-1767, -208, -3746],
  badgeText: [{
    value: 'Visitors to Portal Corp are usually a little concerned when they see these defensive outposts put up near the elevators down to the portals.'
      + ' Tour guides insist they are "just for show", though the occasional "all clear" heard from military radios nearby doesn\'t help much.',
  }],
  notes: `Located under the metal detector in the lobby of the center Portal Corp building in ${zoneLink(PeregrineIsland)}.`,
  links: [
    { title: 'Cause for Concern Badge', href: 'https://homecoming.wiki/wiki/Cause_for_Concern_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '3',
}
