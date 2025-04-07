import { BadgeData } from 'coh-content-db'
import { Spectral } from '../defeat/spectral'

export const RedHand: BadgeData = {
  type: 'gladiator',
  key: 'red-hand',
  setTitleId: [450],
  name: 'Red Hand',
  morality: 'villainous',
  badgeText: 'The spirits of the dead are at your command.',
  links: [
    { title: 'Red Hand Badge', href: 'https://homecoming.wiki/wiki/Red_Hand_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Spectral.key, type: 'badge', badgeKey: Spectral.key },
  ],
}
