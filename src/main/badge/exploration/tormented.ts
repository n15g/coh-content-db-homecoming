import { BadgeData, zoneLink } from 'coh-content-db'
import { TheStormPalace } from '../../zone/the-storm-palace'

export const Tormented: BadgeData = {
  type: 'exploration',
  key: 'tormented',
  setTitleId: [1857],
  name: 'Tormented',
  morality: 'heroic',
  zoneKey: TheStormPalace.key,
  loc: [-8161, 1101, 5762],
  badgeText: `
The Shadow Shard is a prison created to house a powerful entity, an entity tormented by its imprisonment.
Its sense of indignity, of injustice, has been concentrated here to such a degree that it has become part of the dimension.
You can feel the entity's raw emotion flow through you; you have felt it from the very moment you arrived and it has been chipping away at your sense of self ever since.
Remaining here risks making these emotions part of yourself; or worse, you risk being subsumed by the Shadow Shard, losing all identity and will by becoming one with Rularuu.`,
  notes: `Located in ${zoneLink(TheStormPalace)} 0.59 miles SSE of the Lock of Hatred marker and 0.69 miles NE of the Lock of Malice marker.
It is on the west side of the eastern-most island of Lock of Torment.`,
  links: [
    { title: 'Tormented Badge', href: 'https://homecoming.wiki/wiki/Tormented_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '4',
}
