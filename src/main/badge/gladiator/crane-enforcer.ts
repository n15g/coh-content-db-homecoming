import { BadgeData } from 'coh-content-db'
import { Tracer } from '../defeat/tracer'

export const CraneEnforcer: BadgeData = {
  type: 'gladiator',
  key: 'crane-enforcer',
  setTitleId: [478],
  name: [
    { value: 'Crane Enforcer' },
  ],
  morality: 'all',
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
    { key: Tracer.key, type: 'badge', badgeKey: Tracer.key },
  ],
}
