import { MissionData } from 'coh-content-db'
import { AntiMatter } from '../contact/anti-matter'

export const NoSurvivors: MissionData = {
  key: 'no-survivors',
  name: 'No Survivors',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: AntiMatter.key,
  levelRange: [14, 20],
  links: [
    { title: 'No Survivors', href: 'https://homecoming.wiki/wiki/Anti-Matter#No_Survivors' },
  ],
  flashback: {
    id: '18.40',
    levelRange: [20, 24],
    morality: 'all',
  },
}
