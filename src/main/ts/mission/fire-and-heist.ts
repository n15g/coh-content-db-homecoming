import { MissionData } from 'coh-content-db'
import { FireWire } from '../contact/fire-wire'

export const FireAndHeist: MissionData = {
  key: 'fire-and-heist',
  name: 'Fire and Heist',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: FireWire.key,
  levelRange: [1, 7],
  links: [
    { title: 'Fire and Heist', href: 'https://homecoming.wiki/wiki/Fire_Wire#Fire_and_Heist' },
  ],
  flashback: {
    id: '21.07',
    levelRange: [1, 9],
  },
}
