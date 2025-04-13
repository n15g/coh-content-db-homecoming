import { MissionData } from 'coh-content-db'
import { MageKillerZuhkara } from '../contact/mage-killer-zuhkara'

export const DefeatSelestar: MissionData = {
  key: 'defeat-selestar',
  name: 'Defeat Selestar',
  type: 'mission',
  morality: 'villainous',
  contactKeys: MageKillerZuhkara.key,
  levelRange: [40, 44],
  links: [
    { title: 'Defeat Selestar', href: 'https://homecoming.wiki/wiki/Mage-Killer_Zuhkara#Defeat_Selestar' },
  ],
  flashback: {
    id: '7.15',
    name: `Selestar`,
    levelRange: [40, 45],
  },
}
