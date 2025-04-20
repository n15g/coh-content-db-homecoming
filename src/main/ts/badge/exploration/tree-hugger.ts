import { BadgeData } from 'coh-content-db'
import { NervaArchipelago } from '../../zone/nerva-archipelago'

export const TreeHugger: BadgeData = {
  type: 'exploration',
  key: 'tree-hugger',
  setTitleId: [278],
  name: 'Tree Hugger',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `What mysterious purpose does this twisted old tree serve?`,
  notes: `Located in the Thorn Isle neighborhood, at the northwestern base of the large thorn tree in the center of the neighborhood.`,
  links: [
    { title: 'Tree Hugger Badge', href: 'https://homecoming.wiki/wiki/Tree_Hugger_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NervaArchipelago.key, coords: [-165, 12, -180], icon: 'badge', iconText: '5' } },
  ],
}
