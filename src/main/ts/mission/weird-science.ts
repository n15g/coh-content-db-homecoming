import { MissionData } from 'coh-content-db'
import { DoctorCreed } from '../contact/doctor-creed'

export const WeirdScience: MissionData = {
  key: 'weird-science',
  name: 'Weird Science',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: DoctorCreed.key,
  levelRange: [3, 8],
  links: [
    { title: 'Weird Science', href: 'https://homecoming.wiki/wiki/Doctor_Creed#Weird_Science_(Level_3-8)' },
  ],
  flashback: {
    id: '6,04',
    levelRange: [1, 9],
  },
}
