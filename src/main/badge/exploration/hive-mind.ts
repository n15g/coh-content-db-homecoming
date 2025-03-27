import { BadgeData, mapLink } from 'coh-content-db'
import { Eden } from '../../map/eden'
import { TheHive } from '../../map/the-hive'

export const HiveMind: BadgeData = {
  type: 'EXPLORATION',
  key: 'hive-mind',
  setTitle: { id: 1846 },
  name: [{ value: 'Hive Mind' }],
  alignment: ['H'],
  mapKey: Eden.key,
  loc: [1622, 130, 3609],
  badgeText: [{
    value: `The buzz of the Devouring Earth hive mind is especially powerful here.
It sets one's nerves on edge.
You can feel it as a pain behind your eyes, as though something were trying to worm its way into your consciousness.
You wonder how long you could stay here and remain unaffected.
How long you could hold out before the overpowering will of Hamidon found its way into you and made you one of them?`,
  }],
  notes: `Located in ${mapLink(Eden)} 340 yards east and a little bit south of ${mapLink(TheHive)} marker, on the eastern slope of the mound leading away from the spire.`,
  links: [
    { title: 'Hive Mind Badge', href: 'https://homecoming.wiki/wiki/Hive_Mind_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '7',
}
