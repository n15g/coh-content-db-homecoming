import { BadgeData } from 'coh-content-db'
import { ProtectorOfInnocents } from '../achievement/protector-of-innocents'

export const WolfSpiderEnforcer: BadgeData = {
  type: 'gladiator',
  key: 'wolf-spider-enforcer',
  setTitleId: [439],
  name: 'Wolf Spider Enforcer',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'These soldiers will fight for you.',
  links: [
    { title: 'Wolf Spider Enforcer Badge', href: 'https://homecoming.wiki/wiki/Wolf_Spider_Enforcer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: ProtectorOfInnocents.key, type: 'badge', badgeKey: ProtectorOfInnocents.key },
  ],
}
