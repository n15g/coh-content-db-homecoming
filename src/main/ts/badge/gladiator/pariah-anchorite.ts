import { BadgeData } from 'coh-content-db'
import { Intellectual } from '../history/intellectual'

export const PariahAnchorite: BadgeData = {
  type: 'gladiator',
  key: 'pariah-anchorite',
  setTitleId: [499],
  name: 'Pariah Anchorite',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'Now the Lost fear your power!',
  links: [
    { title: 'Pariah Anchorite Badge', href: 'https://homecoming.wiki/wiki/Pariah_Anchorite_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Intellectual.key, type: 'badge', badgeKey: Intellectual.key },
  ],
}
