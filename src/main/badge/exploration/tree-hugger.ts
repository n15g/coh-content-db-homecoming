import { BadgeData, zoneLink } from 'coh-content-db'
import { NervaArchipelago } from '../../zone/nerva-archipelago'

export const TreeHugger: BadgeData = {
  type: 'EXPLORATION',
  key: 'tree-hugger',
  setTitle: { id: 278 },
  name: [{ value: 'Tree Hugger' }],
  alignment: ['V'],
  zoneKey: NervaArchipelago.key,
  loc: [-165, 12, -180],
  badgeText: [{
    value: `What mysterious purpose does this twisted old tree serve?`,
  }],
  notes: `Located in ${zoneLink(NervaArchipelago)}, in the Thorn Isle neighborhood.

          It is at the northwestern base of the large thorn tree in the center of the neighborhood.`,
  links: [
    { title: 'Tree Hugger Badge', href: 'https://homecoming.wiki/wiki/Tree_Hugger_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '5',
}
