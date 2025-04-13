import { MissionData } from 'coh-content-db'
import { Crow } from '../contact/crow'

export const HonorTheFallen: MissionData = {
  key: 'honor-the-fallen',
  name: 'Honor The Fallen',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: Crow.key,
  levelRange: [14, 20],
  links: [
    { title: 'Honor The Fallen', href: 'https://homecoming.wiki/wiki/Crow#Honor_The_Fallen' },
  ],
  flashback: {
    id: '18.45',
    levelRange: [20, 24],
    morality: 'all',
  },
}
