import { MissionData } from 'coh-content-db'
import { DrForrester } from '../contact/dr-forrester'

export const StealAlloyFromSilverMantis: MissionData = {
  key: 'steal-alloy-from-silver-mantis',
  name: 'Steal alloy from Silver Mantis',
  type: 'mission',
  morality: 'villainous',
  contactKeys: DrForrester.key,
  levelRange: [40, 44],
  links: [
    { title: 'Steal alloy from Silver Mantis', href: 'https://homecoming.wiki/wiki/Dr._Forrester#Steal_alloy_from_Silver_Mantis' },
  ],
  flashback: {
    id: '7.11',
    name: 'Party Crasher',
    levelRange: [40, 49],
  },
}
