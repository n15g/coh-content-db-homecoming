import { BadgeData } from 'coh-content-db'
import { MairennMacGregor } from '../../contact/mairenn-macgregor'

export const Charmer: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'charmer',
  setTitle: { id: 69 },
  name: 'Charmer',
  alignment: ['H'],
  badgeText: 'You have defeated the Hydra, a major threat to the sewer network of Paragon City.',
  links: [
    { title: 'Charmer Badge', href: 'https://homecoming.wiki/wiki/Charmer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/trial-1.png',
  requirements: [
    { key: 'abandoned-sewers-trial', type: 'TASK_FORCE', missionName: 'Abandoned Sewers Trial', contactKey: MairennMacGregor.key },
  ],
}
