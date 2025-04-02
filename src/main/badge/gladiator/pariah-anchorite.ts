import { BadgeData } from 'coh-content-db'
import { Intellectual } from '../history/intellectual'

export const PariahAnchorite: BadgeData = {
  type: 'GLADIATOR',
  key: 'pariah-anchorite',
  setTitle: { id: 499 },
  name: [
    { value: 'Pariah Anchorite' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'Now the Lost fear your power!' },
  ],
  links: [
    { title: 'Pariah Anchorite Badge', href: 'https://homecoming.wiki/wiki/Pariah_Anchorite_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Intellectual.key, type: 'BADGE', badgeKey: Intellectual.key },
  ],
}
