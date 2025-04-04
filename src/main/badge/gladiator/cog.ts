import { BadgeData } from 'coh-content-db'
import { Gearsmasher } from '../defeat/gearsmasher'

export const Cog: BadgeData = {
  type: 'gladiator',
  key: 'cog',
  setTitleId: [476],
  name: [
    { value: 'Cog' },
  ],
  morality: 'all',
  badgeText: [
    { value: 'It doesn\'t take much to make these machines fight for you.' },
  ],
  links: [
    { title: 'Cog Badge', href: 'https://homecoming.wiki/wiki/Cog_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Gearsmasher.key, type: 'badge', badgeKey: Gearsmasher.key },
  ],
}
