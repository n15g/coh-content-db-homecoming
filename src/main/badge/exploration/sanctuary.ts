import { BadgeData, zoneLink } from 'coh-content-db'
import { Cimerora } from '../../zone/cimerora'

export const Sanctuary: BadgeData = {
  type: 'EXPLORATION',
  key: 'sanctuary',
  setTitle: { id: 2463 },
  name: [{ value: 'Sanctuary' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `The Temple of Phoebas offers refuge to wives and widows of Cimeroran soldiers, including those loyal to Romulus. Despite Imperious' concerns about enemy spies, Sister Solaris will only permit guards to remain at the gates as long as they are allowed entry.` }],
  zoneKey: Cimerora.key,
  loc: [1633.5, -55.3, 5206.5],
  notes: `Located in ${zoneLink(Cimerora)} in front of the temple entrance along the beach, 182 yards southwest of the Phoebas Point neighborhood marker.`,
  links: [
    { title: 'Sanctuary Badge', href: 'https://homecoming.wiki/wiki/Sanctuary_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '3',
}
