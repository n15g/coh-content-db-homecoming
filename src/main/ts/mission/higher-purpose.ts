import { MissionData } from 'coh-content-db'
import { DoctorWeber } from '../contact/doctor-weber'

export const HigherPurpose: MissionData = {
  key: 'higher-purpose',
  name: 'Higher Purpose',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: DoctorWeber.key,
  levelRange: [1, 7],
  links: [
    { title: 'Higher Purpose', href: 'https://homecoming.wiki/wiki/Doctor_Weber#Higher_Purpose' },
  ],
  flashback: {
    id: '21.06',
    levelRange: [1, 9],
  },
}
