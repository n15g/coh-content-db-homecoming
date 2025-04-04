import { BadgeData } from 'coh-content-db'
import { SilverMantis } from '../../contact/silver-mantis'

export const PirateHunter: BadgeData = {
  type: 'accomplishment',
  key: 'pirate-hunter',
  setTitleId: [513],
  name: [
    { alignment: 'hero', value: 'Pirate Hunter' },
    { alignment: 'villain', value: 'Air Pirate' },
  ],
  morality: 'villainous',
  badgeText: `You disrupted the Sky Raiders' wave of thefts and defeated Col. Duray himself on their off-shore base.`,
  links: [
    { title: 'Pirate Hunter Badge', href: 'https://homecoming.wiki/wiki/Pirate_Hunter_Badge' },
    { title: 'Air Pirate Badge', href: 'https://homecoming.wiki/wiki/Air_Pirate_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pirate-hunter.png',
  requirements: [
    { key: 'smsf', type: 'TASK_FORCE', missionName: 'Silver Mantis Strike Force', contactKey: SilverMantis.key },
  ],
}
