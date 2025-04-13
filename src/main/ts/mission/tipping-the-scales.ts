import { MissionData } from 'coh-content-db'
import { ProvostMarchandPrimal } from '../contact/provost-marchand-primal'

export const TippingTheScales: MissionData = {
  key: 'tipping-the-scales',
  name: 'Tipping the Scales',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: ProvostMarchandPrimal.key,
  levelRange: [30],
  links: [
    { title: 'Tipping the Scales', href: 'https://homecoming.wiki/wiki/Provost_Marchand_(Primal_Earth)#Tipping_the_Scales' },
  ],
  flashback: {
    id: '24.08',
    levelRange: [50],
  },
}
