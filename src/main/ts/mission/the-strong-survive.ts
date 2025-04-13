import { MissionData } from 'coh-content-db'
import { Reese } from '../contact/reese'

export const TheStrongSurvive: MissionData = {
  key: 'the-strong-survive',
  name: 'The Strong Survive',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: Reese.key,
  levelRange: [1, 10],
  links: [
    { title: 'The Strong Survive', href: 'https://homecoming.wiki/wiki/Reese#The_Strong_Survive' },
  ],
  flashback: {
    id: '18.08',
    levelRange: [10, 14],
    morality: 'all',
  },
}
