import { BadgeData, badgeLink } from 'coh-content-db'
import { Haunted } from '../defeat/haunted'

export const Wraith: BadgeData = {
  type: 'GLADIATOR',
  key: 'wraith',
  setTitle: { id: 504 },
  name: [
    { value: 'Wraith' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'The dead will fight for you.' },
  ],
  acquisition: `Earn the ${badgeLink(Haunted)} Badge (Croatoa Ghosts)`,
  links: [
    { title: 'Wraith Badge', href: 'https://homecoming.wiki/wiki/Wraith_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
