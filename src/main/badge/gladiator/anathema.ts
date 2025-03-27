import { BadgeData, badgeLink } from 'coh-content-db'
import { Finder } from '../defeat/finder'

export const Anathema: BadgeData = {
  type: 'GLADIATOR',
  key: 'anathema',
  setTitle: { id: 484 },
  name: [
    { value: 'Anathema' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'These Lost serve you grudgingly.' },
  ],
  acquisition: `Earn the ${badgeLink(Finder)} Badge (The Lost)`,
  links: [
    { title: 'Anathema Badge', href: 'https://homecoming.wiki/wiki/Anathema_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
