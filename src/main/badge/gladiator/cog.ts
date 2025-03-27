import { BadgeData, badgeLink } from 'coh-content-db'
import { Gearsmasher } from '../defeat/gearsmasher'

export const Cog: BadgeData = {
  type: 'GLADIATOR',
  key: 'cog',
  setTitle: { id: 476 },
  name: [
    { value: 'Cog' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'It doesn\'t take much to make these machines fight for you.' },
  ],
  acquisition: `Earn the ${badgeLink(Gearsmasher)}} Badge (Clockwork)`,
  links: [
    { title: 'Cog Badge', href: 'https://homecoming.wiki/wiki/Cog_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
