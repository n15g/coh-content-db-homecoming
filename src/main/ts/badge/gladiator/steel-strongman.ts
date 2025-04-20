import { BadgeData } from 'coh-content-db'
import { Illusionist } from '../defeat/illusionist'

export const SteelStrongman: BadgeData = {
  type: 'gladiator',
  key: 'steel-strongman',
  setTitleId: [506],
  name: 'Steel Strongman',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'Might is not match for your right.',
  links: [
    { title: 'Steel Strongman Badge', href: 'https://homecoming.wiki/wiki/Steel_Strongman_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Illusionist.key, type: 'badge', badgeKey: Illusionist.key },
  ],
}
