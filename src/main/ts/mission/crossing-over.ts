import { MissionData } from 'coh-content-db'
import { BuckSalinger } from '../contact/buck-salinger'

export const CrossingOver: MissionData = {
  key: 'crossing-over',
  name: 'Crossing Over',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: BuckSalinger.key,
  levelRange: [30, 34],
  links: [
    { title: 'Crossing Over', href: 'https://homecoming.wiki/wiki/Buck_Salinger#Crossing_Over_(30-34)' },
  ],
  flashback: {
    id: '5.04',
    levelRange: [30, 34],
  },
}
