import { BadgeData, badgeLink } from 'coh-content-db'
import { Collector } from '../achievement/collector'

export const KaolinLegacyOfEarth: BadgeData = {
  type: 'GLADIATOR',
  key: 'kaolin-legacy-of-earth',
  setTitle: { id: 466 },
  name: [
    { value: 'Kaolin Legacy of Earth' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'The Legacy Chain respects you.' },
    { alignment: 'V', value: 'The Legacy Chain fears you.' },
  ],
  acquisition: `Earn the ${badgeLink(Collector)} Badge (Legacy Chain)`,
  links: [
    { title: 'Kaolin Legacy of Earth Badge', href: 'https://homecoming.wiki/wiki/Kaolin_Legacy_of_Earth_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
