import { BadgeData, zoneLink } from 'coh-content-db'
import { Eden } from '../../zone/eden'
import { TheHive } from '../../zone/the-hive'

export const HiveMind: BadgeData = {
  type: 'exploration',
  key: 'hive-mind',
  setTitleId: [1846],
  name: 'Hive Mind',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `The buzz of the Devouring Earth hive mind is especially powerful here.
It sets one's nerves on edge.
You can feel it as a pain behind your eyes, as though something were trying to worm its way into your consciousness.
You wonder how long you could stay here and remain unaffected.
How long you could hold out before the overpowering will of Hamidon found its way into you and made you one of them?`,
  notes: `Located 340 yards east and a little bit south of ${zoneLink(TheHive)} marker, on the eastern slope of the mound leading away from the spire.`,
  links: [
    { title: 'Hive Mind Badge', href: 'https://homecoming.wiki/wiki/Hive_Mind_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Eden.key, coords: [1622, 130, 3609], icon: 'badge', iconText: '7' } },
  ],
}
