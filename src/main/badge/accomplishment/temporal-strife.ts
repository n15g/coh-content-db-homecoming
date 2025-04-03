import { BadgeData } from 'coh-content-db'
import { Imperious } from '../../contact/imperious'

export const TemporalStrife: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'temporal-strife',
  setTitle: { id: 993 },
  name: 'Temporal Strife',
  alignment: ['H', 'V', 'P'],
  badgeText: 'You are one of the few who has travelled back in time to face the 5th Column as they attempted to build a temporal stronghold in the ancient lands of Cimerora.',
  links: [
    { title: 'Temporal Strife Badge', href: 'https://homecoming.wiki/wiki/Temporal_Strife_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/temporal-strife.png',
  requirements: [
    { key: 'itf', type: 'ARC', missionName: 'Imperious Task Force', contactKey: Imperious.key },
  ],
}
