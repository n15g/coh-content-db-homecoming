import { BadgeData } from 'coh-content-db'
import { DimensionalWarder } from '../defeat/dimensional-warder'

export const Meson: BadgeData = {
  type: 'GLADIATOR',
  key: 'meson',
  setTitle: { id: 505 },
  name: [
    { value: 'Meson' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'This mighty foe is under your control.' },
  ],
  links: [
    { title: 'Meson Badge', href: 'https://homecoming.wiki/wiki/Meson_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: DimensionalWarder.key, type: 'BADGE', badgeKey: DimensionalWarder.key },
  ]],
}
