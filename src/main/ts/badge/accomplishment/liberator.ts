import { BadgeData } from 'coh-content-db'
import { EdenTrial } from '../../mission/eden-trial'

export const Liberator: BadgeData = {
  type: 'accomplishment',
  key: 'liberator',
  setTitleId: [68],
  name: [
    { alignment: 'hero', value: 'Liberator' },
    { alignment: 'villain', value: 'Destroyer of Earth' },
  ],
  morality: 'heroic',
  badgeText: 'You have freed the captured heroes, preventing them from becoming Devoured.',
  links: [
    { title: 'Liberator Badge', href: 'https://homecoming.wiki/wiki/Liberator_Badge' },
    { title: 'Destroyer of Earth Badge', href: 'https://homecoming.wiki/wiki/Destroyer_of_Earth_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/trial-1.png',
  requirements: [
    { key: EdenTrial.key, type: 'mission', missionKey: EdenTrial.key },
  ],
}
