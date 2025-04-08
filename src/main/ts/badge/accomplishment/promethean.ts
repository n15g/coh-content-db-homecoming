import { BadgeData } from 'coh-content-db'
import { MortimerKal } from '../../contact/mortimer-kal'

export const Promethean: BadgeData = {
  type: 'accomplishment',
  key: 'promethean',
  setTitleId: [1982],
  name: 'Promethean',
  morality: 'villainous',
  badgeText: 'You manipulated Mortimer Kal into helping you acquire some of the Flames of Prometheus from Positron!',
  links: [
    { title: 'Promethean Badge', href: 'https://homecoming.wiki/wiki/Promethean_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/promethean.png',
  requirements: [
    { key: 'mksf', type: 'TASK_FORCE', missionName: 'Mortimer Kal Strike Force', contactKey: MortimerKal.key },
  ],
}
