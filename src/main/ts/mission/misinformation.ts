import { MissionData } from 'coh-content-db'
import { RobertFlores } from '../contact/robert-flores'

export const Misinformation: MissionData = {
  key: 'misinformation',
  name: 'Misinformation',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: RobertFlores.key,
  levelRange: [1, 10],
  links: [
    { title: 'Misinformation', href: 'https://homecoming.wiki/wiki/Robert_Flores#Misinformation' },
  ],
  flashback: {
    id: '18.13',
    levelRange: [10, 14],
    morality: 'all',
  },
}
