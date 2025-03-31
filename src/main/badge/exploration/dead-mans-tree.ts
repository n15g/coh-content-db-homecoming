import { BadgeData, zoneLink } from 'coh-content-db'
import { StMartial } from '../../zone/st-martial'

export const DeadMansTree: BadgeData = {
  type: 'EXPLORATION',
  key: 'dead-mans-tree',
  setTitle: { id: 1505 },
  name: [{ value: 'Dead Man\'s Tree' }],
  alignment: ['V'],
  zoneKey: StMartial.key,
  loc: [1670, 121, -2228],
  badgeText: [{
    value: `This dead tree within St. Martial is said to be haunted by the ghost of a man who tried to chop it down.
People say that if you look closely, you can see glimpses of the man's skeleton, waiting to be released from his torture...`,
  }],
  notes: `Located in ${zoneLink(StMartial)}, in the Black Mariah neighborhood.

It is just a few yards south of the tree in the northwest corner of the neighborhood.`,
  links: [
    { title: 'Dead Man\'s Tree Badge', href: 'https://homecoming.wiki/wiki/Dead_Man%27s_Tree_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '5',
}
