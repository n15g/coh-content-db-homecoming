import { BadgeData, badgeLink } from 'coh-content-db'
import { Illusionist } from '../defeat/illusionist'

export const SteelStrongman: BadgeData = {
  type: 'GLADIATOR',
  key: 'steel-strongman',
  setTitle: { id: 506 },
  name: [
    { value: 'Steel Strongman' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'Might is not match for your right.' },
  ],
  acquisition: `Earn the ${badgeLink(Illusionist)} Badge (Carnival of Shadows)`,
  links: [
    { title: 'Steel Strongman Badge', href: 'https://homecoming.wiki/wiki/Steel_Strongman_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
