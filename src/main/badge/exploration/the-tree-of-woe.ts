import { BadgeData, mapLink } from 'coh-content-db'
import { TheAbyss } from '../../map/the-abyss'

export const TheTreeOfWoe: BadgeData = {
  type: 'EXPLORATION',
  key: 'the-tree-of-woe',
  setTitle: { id: 1866 },
  name: [{ value: 'The Tree of Woe' }],
  alignment: ['H', 'V', 'P'],
  mapKey: TheAbyss.key,
  loc: [1399, -44, -1499],
  badgeText: [{
    value: `According to the briefing, some of the facility's survivors fled to this location in a last ditch effort to avoid the inevitable.
            If you look among the grass you can still see some dark splatters that might be blood and maybe a bone fragment or two.
            It gives the place an air of desperation and terror that is not entirely unfamiliar.`,
  }],
  notes: `Located in ${mapLink(TheAbyss)}, 871 yards northwest of the Grandville transfer point,
at the base of a tree where the road circles around at the westernmost developed portion of the zone.`,
  links: [
    { title: 'The Tree of Woe Badge', href: 'https://homecoming.wiki/wiki/The_Tree_of_Woe_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '7',
}
