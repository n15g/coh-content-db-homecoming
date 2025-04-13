import { MissionData } from 'coh-content-db'
import { DoctorArvin } from '../contact/doctor-arvin'

export const RageQuit: MissionData = {
  key: 'rage-quit',
  name: 'Rage Quit',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: DoctorArvin.key,
  levelRange: [1, 10],
  links: [
    { title: 'Rage Quit', href: 'https://homecoming.wiki/wiki/Doctor_Arvin#Rage_Quit' },
  ],
  flashback: {
    id: '18.16',
    levelRange: [10, 14],
    morality: 'all',
  },
}
