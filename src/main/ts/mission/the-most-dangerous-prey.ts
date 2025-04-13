import { MissionData } from 'coh-content-db'
import { Orpheus } from '../contact/orpheus'

export const TheMostDangerousPrey: MissionData = {
  key: 'the-most-dangerous-prey',
  name: 'The Most Dangerous Prey',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: Orpheus.key,
  levelRange: [25, 29],
  links: [
    { title: 'The Most Dangerous Prey', href: 'https://homecoming.wiki/wiki/Orpheus#The_Most_Dangerous_Prey_(25-29)' },
  ],
  flashback: {
    id: '27.93',
    levelRange: [25, 29],
  },
}
