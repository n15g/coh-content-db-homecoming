import { BadgeData } from 'coh-content-db'
import { ImperiousTaskForce } from '../../mission/imperious-task-force'

export const TemporalStrife: BadgeData = {
  type: 'accomplishment',
  key: 'temporal-strife',
  setTitleId: [993],
  name: 'Temporal Strife',
  morality: 'all',
  badgeText: 'You are one of the few who has travelled back in time to face the 5th Column as they attempted to build a temporal stronghold in the ancient lands of Cimerora.',
  links: [
    { title: 'Temporal Strife Badge', href: 'https://homecoming.wiki/wiki/Temporal_Strife_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/temporal-strife.png',
  requirements: [
    { key: ImperiousTaskForce.key, type: 'mission', missionKey: ImperiousTaskForce.key },
  ],
}
