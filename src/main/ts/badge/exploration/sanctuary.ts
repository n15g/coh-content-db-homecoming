import { BadgeData } from 'coh-content-db'
import { Cimerora } from '../../zone/cimerora'

export const Sanctuary: BadgeData = {
  type: 'exploration',
  key: 'sanctuary',
  setTitleId: [2463],
  name: 'Sanctuary',
  morality: 'all',
  badgeText: `The Temple of Phoebas offers refuge to wives and widows of Cimeroran soldiers, including those loyal to Romulus.
Despite Imperious' concerns about enemy spies, Sister Solaris will only permit guards to remain at the gates as long as they are allowed entry.`,
  notes: `Located in front of the temple entrance along the beach, 182 yards southwest of the Phoebas Point neighborhood marker.`,
  links: [
    { title: 'Sanctuary Badge', href: 'https://homecoming.wiki/wiki/Sanctuary_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Cimerora.key, coords: [1633.5, -55.3, 5206.5], icon: 'badge', iconText: '3' } },
  ],
}
