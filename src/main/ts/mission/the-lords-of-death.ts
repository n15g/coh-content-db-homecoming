import { MissionData } from 'coh-content-db'
import { EagleEye } from '../contact/eagle-eye'

export const TheLordsOfDeath: MissionData = {
  key: 'the-lords-of-death',
  name: 'The Lords of Death',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: EagleEye.key,
  levelRange: [7, 20],
  links: [
    { title: 'The Lords of Death', href: 'https://homecoming.wiki/wiki/Eagle_Eye#The_Lords_of_Death' },
  ],
  flashback: {
    id: '24.02',
    levelRange: [15, 19],
  },
}
