import { MissionData } from 'coh-content-db'
import { AlexanderTheGreat } from '../contact/alexander-the-great'

export const Know Thy Enemy: MissionData = {
  key: 'know-thy-enemy',
  name: 'Know Thy Enemy',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: AlexanderTheGreat.key,
  levelRange: [40, 50],
  links: [
    { title: 'Know Thy Enemy', href: 'https://homecoming.wiki/wiki/Alexander_the_Great#Know_Thy_Enemy' },
  ],
  flashback: {
    id: '28.04',
    levelRange: [50],
  },
}
