import { BadgeData, mapLink } from 'coh-content-db'
import { TalosIsland } from '../../map/talos-island'

export const OvertimeWorker: BadgeData = {
  type: 'EXPLORATION',
  key: 'overtime-worker',
  setTitle: { id: 1549 },
  name: [{ value: 'Overtime Worker' }],
  alignment: ['H'],
  mapKey: TalosIsland.key,
  loc: [-3707, 96, 8629],
  badgeText: [{
    value: 'After Dark Astoria was taken over by the Banished Pantheon, the construction workers of Paragon were ordered to demolish the road leading into the cursed city.'
      + ' The construction workers put in major overtime work to make it happen, and by week\'s end the road was gone, symbolizing that the city had left Astoria'
      + ' to the works of the Banished Pantheon.',
  }],
  notes: `Located in the Argo Highway neighborhood of ${mapLink(TalosIsland)}, 218 yards west of the Dark Astoria gate.`,
  links: [
    { title: 'Overtime Worker Badge', href: 'https://homecoming.wiki/wiki/Overtime_Worker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '7',
}
