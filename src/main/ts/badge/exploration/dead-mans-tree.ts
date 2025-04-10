import { BadgeData } from 'coh-content-db'
import { StMartial } from '../../zone/st-martial'

export const DeadMansTree: BadgeData = {
  type: 'exploration',
  key: 'dead-mans-tree',
  setTitleId: [1505],
  name: `Dead Man's Tree`,
  morality: 'rogue-isles-access',
  badgeText: `This dead tree within St. Martial is said to be haunted by the ghost of a man who tried to chop it down.
People say that if you look closely, you can see glimpses of the man's skeleton, waiting to be released from his torture...`,
  notes: `Located in the Black Mariah neighborhood, just a few yards south of the tree in the northwest corner of the neighborhood.`,
  links: [
    { title: `Dead Man's Tree Badge`, href: 'https://homecoming.wiki/wiki/Dead_Man%27s_Tree_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: StMartial.key, coords: [1670, 121, -2228], icon: 'badge', iconText: '5' } },
  ],
}
