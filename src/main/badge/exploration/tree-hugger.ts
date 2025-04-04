import { BadgeData, zoneLink } from 'coh-content-db'
import { NervaArchipelago } from '../../zone/nerva-archipelago'

export const TreeHugger: BadgeData = {
  type: 'exploration',
  key: 'tree-hugger',
  setTitleId: [278],
  name: 'Tree Hugger',
  morality: 'villainous',
  zoneKey: NervaArchipelago.key,
  loc: [-165, 12, -180],
  badgeText: [{
    value: `What mysterious purpose does this twisted old tree serve?`,
  }],
  notes: `
Located in ${zoneLink(NervaArchipelago)}, in the Thorn Isle neighborhood.

It is at the northwestern base of the large thorn tree in the center of the neighborhood.`,
  links: [
    { title: 'Tree Hugger Badge', href: 'https://homecoming.wiki/wiki/Tree_Hugger_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '5',
}
