import { BadgeData } from 'coh-content-db'
import { Cimerora } from '../../zone/cimerora'

export const DarknessUnleashed: BadgeData = {
  type: 'exploration',
  key: 'darkness-unleashed',
  setTitleId: [2468],
  name: 'Darkness Unleashed',
  morality: 'all',
  badgeText: `The mighty beasts that roam the hills of Cimerora guard certain cave entrances fiercely. Rumours say that 'dark ones' are the source of their power, and entering those caves is the first step in walking the Path of the Dark.`,
  zoneKey: Cimerora.key,
  loc: [-170, 192.3, 1490],
  notes: `Located 501 yards northwest of the Castellum Quarter neighborhood marker, between two trees along the cliffs.`,
  links: [
    { title: 'Darkness Unleashed Badge', href: 'https://homecoming.wiki/wiki/Darkness_Unleashed_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '8',
}
