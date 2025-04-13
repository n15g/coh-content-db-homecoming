import { MissionData } from 'coh-content-db'
import { ProvostMarchandPrimal } from '../contact/provost-marchand-primal'

export const Gamble: MissionData = {
  key: 'gamble',
  name: 'Gamble',
  type: 'personal-story',
  morality: 'heroic',
  contactKeys: ProvostMarchandPrimal.key,
  levelRange: [30],
  links: [
    { title: 'Gamble', href: 'https://homecoming.wiki/wiki/Provost_Marchand_(Primal_Earth)#Gamble' },
  ],
}
