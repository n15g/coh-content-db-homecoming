import { MissionData } from 'coh-content-db'
import { EfficiencyExpertPither } from '../contact/efficiency-expert-pither'

export const KidnapDiocletian: MissionData = {
  key: 'kidnap-diocletian',
  name: 'Kidnap Diocletian',
  type: 'mission',
  morality: 'villainous',
  contactKeys: EfficiencyExpertPither.key,
  levelRange: [45],
  links: [
    { title: 'Kidnap Diocletian', href: 'https://homecoming.wiki/wiki/Efficiency_Expert_Pither#Kidnap_Diocletian' },
  ],
}
