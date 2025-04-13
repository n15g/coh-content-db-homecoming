import { MissionData } from 'coh-content-db'
import { Reese } from '../contact/reese'

export const RiseToPower: MissionData = {
  key: 'rise-to-power',
  name: 'Rise to Power',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: Reese.key,
  levelRange: [1, 10],
  links: [
    { title: 'Rise to Power', href: 'https://homecoming.wiki/wiki/Reese#Rise_to_Power' },
  ],
  flashback: {
    id: '18.07',
    levelRange: [10, 14],
    morality: 'all',
  },
}
