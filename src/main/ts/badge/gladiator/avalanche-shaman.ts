import { BadgeData } from 'coh-content-db'
import { Banisher } from '../defeat/banisher'

export const AvalancheShaman: BadgeData = {
  type: 'gladiator',
  key: 'avalanche-shaman',
  setTitleId: [489],
  name: 'Avalanche Shaman',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'These shamans acknowledge your might.',
  links: [
    { title: 'Avalanche Shaman Badge', href: 'https://homecoming.wiki/wiki/Avalanche_Shaman_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Banisher.key, type: 'badge', badgeKey: Banisher.key },
  ],
}
