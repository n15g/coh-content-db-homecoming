import { BadgeData } from 'coh-content-db'
import { Regenerator } from '../defeat/regenerator'
import { BinderOfBeasts } from '../accomplishment/binder-of-beasts'

export const Caliban: BadgeData = {
  type: 'GLADIATOR',
  key: 'caliban',
  setTitle: { id: 481 },
  name: [
    { value: 'Caliban' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'The Trolls respect your might.' },
  ],
  links: [
    { title: 'Caliban Badge', href: 'https://homecoming.wiki/wiki/Caliban_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: Regenerator.key, type: 'BADGE', badgeKey: BinderOfBeasts.key },
  ]],
}
