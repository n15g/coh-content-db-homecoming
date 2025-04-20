import { BadgeData } from 'coh-content-db'
import { DimensionalWarder } from '../defeat/dimensional-warder'

export const Meson: BadgeData = {
  type: 'gladiator',
  key: 'meson',
  setTitleId: [505],
  name: 'Meson',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'This mighty foe is under your control.',
  links: [
    { title: 'Meson Badge', href: 'https://homecoming.wiki/wiki/Meson_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: DimensionalWarder.key, type: 'badge', badgeKey: DimensionalWarder.key },
  ],
}
