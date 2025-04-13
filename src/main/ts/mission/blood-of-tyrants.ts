import { MissionData } from 'coh-content-db'
import { Wardog } from '../contact/wardog'

export const BloodOfTyrants: MissionData = {
  key: 'blood-of-tyrants',
  name: 'Blood of Tyrants',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: Wardog.key,
  levelRange: [8, 15],
  links: [
    { title: 'Blood of Tyrants', href: 'https://homecoming.wiki/wiki/Wardog#Blood_of_Tyrants' },
  ],
  flashback: {
    id: '18.31',
    levelRange: [15, 19],
    morality: 'all',
  },
}
