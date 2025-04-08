import { MissionData } from 'coh-content-db'
import { DmitriKrylov } from '../contact/dmitri-krylov'

export const BringCitizensToVahzilokSurgeons: MissionData = {
  key: 'bring-citizens-to-vahzilok-surgeons',
  name: 'Bring citizens to Vahzilok surgeons',
  type: 'mission',
  morality: 'villainous',
  contactKeys: DmitriKrylov.key,
  levelRange: [10, 14],
  links: [{ title: 'Bring citizens to Vahzilok surgeons', href: 'https://homecoming.wiki/wiki/Dmitri_Krylov#Bring_citizens_to_Vahzilok_surgeons' }],
}
