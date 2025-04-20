import { BadgeData, zoneLink } from 'coh-content-db'
import { TheAbyss } from '../../zone/the-abyss'

export const TheTreeOfWoe: BadgeData = {
  type: 'exploration',
  key: 'the-tree-of-woe',
  setTitleId: [1866],
  name: 'The Tree of Woe',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `
According to the briefing, some of the facility's survivors fled to this location in a last ditch effort to avoid the inevitable.
If you look among the grass you can still see some dark splatters that might be blood and maybe a bone fragment or two.
It gives the place an air of desperation and terror that is not entirely unfamiliar.`,
  notes: `Located in ${zoneLink(TheAbyss)}, 871 yards northwest of the Grandville transfer point,
at the base of a tree where the road circles around at the westernmost developed portion of the zone.`,
  links: [
    { title: 'The Tree of Woe Badge', href: 'https://homecoming.wiki/wiki/The_Tree_of_Woe_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheAbyss.key, coords: [1399, -44, -1499], icon: 'badge', iconText: '7' } },
  ],
}
