import { BadgeData } from 'coh-content-db'
import { Finder } from '../defeat/finder'

export const Anathema: BadgeData = {
  type: 'gladiator',
  key: 'anathema',
  setTitleId: [484],
  name: 'Anathema',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'These Lost serve you grudgingly.',
  links: [
    { title: 'Anathema Badge', href: 'https://homecoming.wiki/wiki/Anathema_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Finder.key, type: 'badge', badgeKey: Finder.key },
  ],
}
