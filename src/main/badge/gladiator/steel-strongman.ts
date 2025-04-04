import { BadgeData } from 'coh-content-db'
import { Illusionist } from '../defeat/illusionist'

export const SteelStrongman: BadgeData = {
  type: 'gladiator',
  key: 'steel-strongman',
  setTitleId: [506],
  name: [
    { value: 'Steel Strongman' },
  ],
  morality: 'all',
  badgeText: [
    { value: 'Might is not match for your right.' },
  ],
  links: [
    { title: 'Steel Strongman Badge', href: 'https://homecoming.wiki/wiki/Steel_Strongman_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Illusionist.key, type: 'badge', badgeKey: Illusionist.key },
  ],
}
