import { MissionData } from 'coh-content-db'
import { DoctorSteffard } from '../contact/doctor-steffard'

export const SelfRestraint: MissionData = {
  key: 'self-restraint',
  name: 'Self Restraint',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: DoctorSteffard.key,
  levelRange: [8, 15],
  links: [
    { title: 'Self Restraint', href: 'https://homecoming.wiki/wiki/Doctor_Steffard#Self_Restraint' },
  ],
  flashback: {
    id: '18.34',
    levelRange: [15, 19],
    morality: 'all',
  },
}
