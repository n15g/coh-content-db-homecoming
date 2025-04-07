import { BadgeData, zoneLink } from 'coh-content-db'
import { CascadeArchipelago } from '../../zone/cascade-archipelago'

export const TheHeartOfMemory: BadgeData = {
  type: 'exploration',
  key: 'the-heart-of-memory',
  setTitleId: [1812],
  name: 'The Heart of Memory',
  morality: 'heroic',
  zoneKey: CascadeArchipelago.key,
  loc: [-1814, 3032, 128],
  badgeText: 'You have found the source of the Crimson Falls.'
    + ' Scientists who have studied it have only theories as to its source and composition, but they are in agreement that it is not entirely of this dimension.'
    + ' Some think that perhaps it is a form of quantum foam; exotic particles and degenerate matter drawn to the Shadow Shard from other dimensions.'
    + ' Swimming through it you find that it offers little resistance, does not make you wet, and while immersed in it you find yourself recalling past events.'
    + ' These recollections become fleeting, as though drawn from you to suffuse the fluid.'
    + ' One memory follows another and as each one does, it becomes increasingly difficult to bring them back.'
    + ' You fear that were you to stay here much longer, the fluid would empty you of all memory.',
  notes: `Located in ${zoneLink(CascadeArchipelago)} 544 yards NE of the Crimson Falls marker, in the middle of a lake.`,
  links: [
    { title: 'The Heart of Memory Badge', href: 'https://homecoming.wiki/wiki/The_Heart_of_Memory_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '8',
}
