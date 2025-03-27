import { BadgeData, badgeLink } from 'coh-content-db'
import { Irradiated } from '../achievement/irradiated'

export const ShivanDestroyer: BadgeData = {
  type: 'GLADIATOR',
  key: 'shivan-destroyer',
  setTitle: { id: 452 },
  name: [
    { value: 'Shivan Destroyer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have learned to control the mindless horrors from space.' },
  ],
  acquisition: `Earn the ${badgeLink(Irradiated)} Badge (Shivans)`,
  links: [
    { title: 'Shivan Destroyer Badge', href: 'https://homecoming.wiki/wiki/Shivan_Destroyer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
