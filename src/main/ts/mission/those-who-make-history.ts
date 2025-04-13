import { MissionData } from 'coh-content-db'
import { Wardog } from '../contact/wardog'

export const ThoseWhoMakeHistory: MissionData = {
  key: 'those-who-make-history',
  name: 'Those Who Make History',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: Wardog.key,
  levelRange: [8, 15],
  links: [
    { title: 'Those Who Make History', href: 'https://homecoming.wiki/wiki/Wardog#Those_Who_Make_History' },
  ],
  flashback: {
    id: '18.30',
    levelRange: [15, 19],
    morality: 'all',
  },
}
