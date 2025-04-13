import { MissionData } from 'coh-content-db'
import { AaronWalker } from '../contact/aaron-walker'

export const TheSavageMan: MissionData = {
  key: 'the-savage-man',
  name: 'The Savage Man',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: AaronWalker.key,
  levelRange: [14, 20],
  links: [
    { title: 'The Savage Man', href: 'https://homecoming.wiki/wiki/Aaron_Walker#The_Savage_Man' },
  ],
  flashback: {
    id: '18.49',
    levelRange: [20, 24],
    morality: 'all',
  },
}
