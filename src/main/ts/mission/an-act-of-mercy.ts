import { MissionData } from 'coh-content-db'
import { MuVorkan } from '../contact/muvorkan'

export const AnActOfMercy: MissionData = {
  key: 'an-act-of-mercy',
  name: 'An Act of Mercy',
  type: 'story-arc',
  morality: 'primal',
  contactKeys: MuVorkan.key,
  levelRange: [50],
  links: [
    { title: 'An Act of Mercy', href: 'https://homecoming.wiki/wiki/Mu%27Vorkan#An_Act_of_Mercy' },
  ],
  flashback: {
    id: '22.09',
    levelRange: [50],
  },
}
