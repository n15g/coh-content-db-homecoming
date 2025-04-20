import { BadgeData } from 'coh-content-db'
import { Collector } from '../achievement/collector'

export const KaolinLegacyOfEarth: BadgeData = {
  type: 'gladiator',
  key: 'kaolin-legacy-of-earth',
  setTitleId: [466],
  name: 'Kaolin Legacy of Earth',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'The Legacy Chain respects you.' },
    { alignment: 'villain', value: 'The Legacy Chain fears you.' },
  ],
  links: [
    { title: 'Kaolin Legacy of Earth Badge', href: 'https://homecoming.wiki/wiki/Kaolin_Legacy_of_Earth_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Collector.key, type: 'badge', badgeKey: Collector.key },
  ],
}
