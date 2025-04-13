import { MissionData } from 'coh-content-db'
import { NumberSix } from '../contact/number-six'

export const PraetoriasLastGasp: MissionData = {
  key: 'praetorias-last-gasp',
  name: `Praetoria's Last Gasp`,
  type: 'story-arc',
  morality: 'primal',
  contactKeys: NumberSix.key,
  levelRange: [50],
  links: [
    { title: `Praetoria's Last Gasp`, href: `https://homecoming.wiki/wiki/Number_Six#Praetoria's_Last_Gasp` },
  ],
  flashback: {
    id: '24.15',
    levelRange: [50],
  },
}
