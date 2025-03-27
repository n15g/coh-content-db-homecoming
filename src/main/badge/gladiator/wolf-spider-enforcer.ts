import { BadgeData, badgeLink } from 'coh-content-db'
import { ProtectorOfInnocents } from '../achievement/protector-of-innocents'

export const WolfSpiderEnforcer: BadgeData = {
  type: 'GLADIATOR',
  key: 'wolf-spider-enforcer',
  setTitle: { id: 439 },
  name: [
    { value: 'Wolf Spider Enforcer' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'These soldiers will fight for you.' },
  ],
  acquisition: `Earn the ${badgeLink(ProtectorOfInnocents)} Badge (Arachnos)`,
  links: [
    { title: 'Wolf Spider Enforcer Badge', href: 'https://homecoming.wiki/wiki/Wolf_Spider_Enforcer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
