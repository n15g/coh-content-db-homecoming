import { BadgeData } from 'coh-content-db'
import { KeeperOfPeace } from '../achievement/keeper-of-peace'

export const WolfSpiderTacOps: BadgeData = {
  type: 'GLADIATOR',
  key: 'wolf-spider-tac-ops',
  setTitle: { id: 441 },
  name: [
    { value: 'Wolf Spider Tac Ops' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'Your leadership skills are recognized.' },
  ],
  links: [
    { title: 'Wolf Spider Tac Ops Badge', href: 'https://homecoming.wiki/wiki/Wolf_Spider_Tac_Ops_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: KeeperOfPeace.key, type: 'BADGE', badgeKey: KeeperOfPeace.key },
  ]],
}
