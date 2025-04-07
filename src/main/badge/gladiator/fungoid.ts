import { BadgeData } from 'coh-content-db'
import { Protectorate } from '../defeat/protectorate'

export const Fungoid: BadgeData = {
  type: 'gladiator',
  key: 'fungoid',
  setTitleId: [498],
  name: [
    { value: 'Fungoid' },
  ],
  morality: 'all',
  badgeText: [
    { value: 'The mushroom men will fight for you.' },
  ],
  links: [
    { title: 'Fungoid Badge', href: 'https://homecoming.wiki/wiki/Fungoid_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Protectorate.key, type: 'badge', badgeKey: Protectorate.key },
  ],
}
