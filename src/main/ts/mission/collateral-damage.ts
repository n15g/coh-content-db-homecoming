import { MissionData } from 'coh-content-db'
import { LauraLockhart } from '../contact/laura-lockhart'

export const CollateralDamage: MissionData = {
  key: 'collateral-damage',
  name: 'Collateral Damage',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: LauraLockhart.key,
  levelRange: [15, 24],
  links: [
    { title: 'Collateral Damage', href: 'https://homecoming.wiki/wiki/Laura_Lockhart#Collateral_Damage' },
  ],
  flashback: {
    id: '22.01',
    levelRange: [20, 24],
  },
}
