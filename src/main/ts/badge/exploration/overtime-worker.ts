import { BadgeData } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'

export const OvertimeWorker: BadgeData = {
  type: 'exploration',
  key: 'overtime-worker',
  setTitleId: [1549],
  name: 'Overtime Worker',
  morality: 'paragon-city-access',
  badgeText: `After Dark Astoria was taken over by the Banished Pantheon, the construction workers of Paragon were ordered to demolish the road leading into the cursed city.
The construction workers put in major overtime work to make it happen, and by week's end the road was gone, symbolizing that the city had left Astoria to the works of the Banished Pantheon.`,
  notes: `Located in the Argo Highway neighborhood, 218 yards west of the Dark Astoria gate.`,
  links: [
    { title: 'Overtime Worker Badge', href: 'https://homecoming.wiki/wiki/Overtime_Worker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TalosIsland.key, coords: [-3707, 96, 8629], icon: 'badge', iconText: '7' } },
  ],
}
