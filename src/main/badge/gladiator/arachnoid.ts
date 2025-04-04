import { BadgeData } from 'coh-content-db'
import { SewerDweller } from '../exploration/sewer-dweller'

export const Arachnoid: BadgeData = {
  type: 'gladiator',
  key: 'arachnoid',
  setTitleId: [440],
  name: [
    { value: 'Arachnoid' },
  ],
  morality: 'villainous',
  badgeText: [
    { value: 'These hideous creatures obey you.' },
  ],
  links: [
    { title: 'Arachnoid Badge', href: 'https://homecoming.wiki/wiki/Arachnoid_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: SewerDweller.key, type: 'badge', badgeKey: SewerDweller.key },
  ],
}
