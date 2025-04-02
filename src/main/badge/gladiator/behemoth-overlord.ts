import { BadgeData } from 'coh-content-db'
import { DemonSlayer } from '../defeat/demon-slayer'
import { BinderOfBeasts } from '../accomplishment/binder-of-beasts'

export const BehemothOverlord: BadgeData = {
  type: 'GLADIATOR',
  key: 'behemoth-overlord',
  setTitle: { id: 503 },
  name: [
    { value: 'Behemoth Overlord' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'Even demons obey your will.' },
  ],
  links: [
    { title: 'Behemoth Overlord Badge', href: 'https://homecoming.wiki/wiki/Behemoth_Overlord_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: DemonSlayer.key, type: 'BADGE', badgeKey: BinderOfBeasts.key },
  ],
}
