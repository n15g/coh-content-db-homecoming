import { BadgeData, zoneLink } from 'coh-content-db'
import { Cimerora } from '../../zone/cimerora'

export const DarknessUnleashed: BadgeData = {
  type: 'EXPLORATION',
  key: 'darkness-unleashed',
  setTitle: { id: 2468 },
  name: [{ value: 'Darkness Unleashed' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `The mighty beasts that roam the hills of Cimerora guard certain cave entrances fiercely. Rumours say that 'dark ones' are the source of their power, and entering those caves is the first step in walking the Path of the Dark.` }],
  zoneKey: Cimerora.key,
  loc: [-170, 192.3, 1490],
  notes: `Located in ${zoneLink(Cimerora)} in the northwest corner of Castellum Quarter, between two trees along the cliffs, 501 yards northwest of the Castellum Quarter neighborhood marker.`,
  links: [
    { title: 'Darkness Unleashed Badge', href: 'https://homecoming.wiki/wiki/Darkness_Unleashed_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '8',
}
