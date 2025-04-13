import { MissionData } from 'coh-content-db'
import { Mongoose } from '../contact/mongoose'

export const SnakeUprising: MissionData = {
  key: 'snake-uprising',
  name: 'Snake Uprising',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: Mongoose.key,
  levelRange: [3, 8],
  links: [
    { title: 'Snake Uprising', href: 'https://homecoming.wiki/wiki/Mongoose#Snake_Uprising' },
  ],
  flashback: {
    id: '6.02',
    levelRange: [1, 9],
  },
}
