import { MissionData } from 'coh-content-db'
import { ProvostMarchandPrimal } from '../contact/provost-marchand-primal'

export const ANewWar: MissionData = {
  key: 'a-new-war',
  name: 'A New War',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: ProvostMarchandPrimal.key,
  levelRange: [30],
  links: [
    { title: 'A New War', href: 'https://homecoming.wiki/wiki/Provost_Marchand_(Primal_Earth)#A_New_War' },
  ],
  flashback: {
    id: '24.07',
    levelRange: [50],
  },
}
