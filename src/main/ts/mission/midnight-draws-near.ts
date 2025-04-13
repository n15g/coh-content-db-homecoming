import { MissionData } from 'coh-content-db'
import { DarrenWade } from '../contact/darren-wade'

export const MidnightDrawsNear: MissionData = {
  key: 'midnight-draws-near',
  name: 'Midnight Draws Near',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: DarrenWade.key,
  levelRange: [20, 30],
  links: [
    { title: 'Midnight Draws Near', href: 'https://homecoming.wiki/wiki/Darrin_Wade#Midnight_Draws_Near_(20-30)' },
  ],
  flashback: {
    id: '12.05',
    levelRange: [25, 29],
  },
}
