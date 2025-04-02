import { BadgeData } from 'coh-content-db'
import { Spectral } from '../defeat/spectral'

export const RedHand: BadgeData = {
  type: 'GLADIATOR',
  key: 'red-hand',
  setTitle: { id: 450 },
  name: [
    { value: 'Red Hand' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'The spirits of the dead are at your command.' },
  ],
  links: [
    { title: 'Red Hand Badge', href: 'https://homecoming.wiki/wiki/Red_Hand_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Spectral.key, type: 'BADGE', badgeKey: Spectral.key },
  ],
}
