import { MissionData } from 'coh-content-db'
import { DoctorArvin } from '../contact/doctor-arvin'

export const FixingFixadine: MissionData = {
  key: 'fixing-fixadine',
  name: 'Fixing Fixadine',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: DoctorArvin.key,
  levelRange: [1, 10],
  links: [
    { title: 'Fixing Fixadine', href: 'https://homecoming.wiki/wiki/Doctor_Arvin#Fixing_Fixadine' },
  ],
  flashback: {
    id: '18.15',
    levelRange: [10, 14],
    morality: 'all',
  },
}
