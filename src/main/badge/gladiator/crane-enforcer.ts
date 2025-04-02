import { BadgeData } from 'coh-content-db'
import { Tracer } from '../defeat/tracer'

export const CraneEnforcer: BadgeData = {
  type: 'GLADIATOR',
  key: 'crane-enforcer',
  setTitle: { id: 478 },
  name: [
    { value: 'Crane Enforcer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'The Tsoo are bound by honor to serve you.' },
  ],
  links: [
    { title: 'Crane Enforcer Badge', href: 'https://homecoming.wiki/wiki/Crane_Enforcer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Tracer.key, type: 'BADGE', badgeKey: Tracer.key },
  ],
}
