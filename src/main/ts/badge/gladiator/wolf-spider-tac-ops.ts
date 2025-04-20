import { BadgeData } from 'coh-content-db'
import { KeeperOfPeace } from '../achievement/keeper-of-peace'

export const WolfSpiderTacOps: BadgeData = {
  type: 'gladiator',
  key: 'wolf-spider-tac-ops',
  setTitleId: [441],
  name: 'Wolf Spider Tac Ops',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'Your leadership skills are recognized.',
  links: [
    { title: 'Wolf Spider Tac Ops Badge', href: 'https://homecoming.wiki/wiki/Wolf_Spider_Tac_Ops_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: KeeperOfPeace.key, type: 'badge', badgeKey: KeeperOfPeace.key },
  ],
}
