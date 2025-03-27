import { BadgeData, badgeLink } from 'coh-content-db'
import { GrandLanista } from './grand-lanista'

export const HerculesTitan: BadgeData = {
  type: 'GLADIATOR',
  key: 'hercules-titan',
  setTitle: { id: 471 },
  name: [
    { value: 'Hercules Titan' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have unlocked a mighty Titan for your gladiator team.' },
  ],
  acquisition: `Earn the ${badgeLink(GrandLanista)} Badge (Malta Operatives)`,
  links: [
    { title: 'Hercules Titan Badge', href: 'https://homecoming.wiki/wiki/Hercules_Titan_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
