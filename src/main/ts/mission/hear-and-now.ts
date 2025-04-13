import { MissionData } from 'coh-content-db'
import { LongJack } from '../contact/long-jack'

export const HearAndNow: MissionData = {
  key: 'hear-and-now',
  name: 'Hear and Now',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: LongJack.key,
  levelRange: [20, 24],
  links: [
    { title: 'Hear and Now', href: 'https://homecoming.wiki/wiki/Long_Jack#Hear_and_Now_(20-24)' },
  ],
  flashback: {
    id: '3.02',
    levelRange: [25, 29],
  },
}
