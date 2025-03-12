import { BadgeData } from 'coh-content-db'
import { MercyIsland } from '../../map/mercy-island'

export const Widower: BadgeData = {
  type: 'EXPLORATION',
  key: 'widower',
  setTitle: { id: 268 },
  name: [
    { sex: 'M', value: 'Widower' },
    { sex: 'F', value: 'Widow' },
  ],
  alignment: ['V'],
  mapKey: MercyIsland.key,
  loc: [-3890, 407, 354],
  badgeText: [{ value: 'They say that lonely tower is the home of Ghost Widow, Lord Recluse\'s phantom servant.' }],
  notes: `Located on [map:${MercyIsland.key}], outside the door of the very tall tower in the northeast corner of Fort Cerberus.`,
  links: [
    { title: 'Widower Badge', href: 'https://homecoming.wiki/wiki/Widower_Badge' },
    { title: 'Widow Badge', href: 'https://homecoming.wiki/wiki/Widow_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '6',
}
