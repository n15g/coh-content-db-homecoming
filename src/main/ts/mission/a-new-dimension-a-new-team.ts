import { MissionData } from 'coh-content-db'
import { ProvostMarchandPrimal } from '../contact/provost-marchand-primal'

export const ANewDimensionANewTeam: MissionData = {
  key: 'a-new-dimension-a-new-team',
  name: 'A New Dimension, A New Team',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: ProvostMarchandPrimal.key,
  levelRange: [30],
  links: [
    { title: 'A New Dimension, A New Team', href: 'https://homecoming.wiki/wiki/Provost_Marchand_(Primal_Earth)#A_New_Dimension,_A_New_Team' },
  ],
  flashback: {
    id: '24.06',
    levelRange: [50],
  },
}
