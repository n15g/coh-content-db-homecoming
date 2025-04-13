import { MissionData } from 'coh-content-db'
import { TheMagician } from '../contact/the-magician'

export const TheGateThatCannotOpen: MissionData = {
  key: 'the-gate-that-cannot-open',
  name: 'The Gate that Cannot Open',
  type: 'story-arc',
  morality: 'all',
  contactKeys: TheMagician.key,
  levelRange: [30, 39],
  links: [
    { title: 'The Gate that Cannot Open', href: 'https://homecoming.wiki/wiki/The_Magician_(Contact)#The_Gate_that_Cannot_Open' },
  ],
  flashback: {
    id: '23.05',
    levelRange: [35, 39],
    morality: 'primal',
  },
}
