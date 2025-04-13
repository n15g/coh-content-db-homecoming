import { MissionData } from 'coh-content-db'
import { DarkWatcher } from '../contact/dark-watcher'

export const ToOurHealth: MissionData = {
  key: 'to-our-health',
  name: 'To Our Health',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: DarkWatcher.key,
  levelRange: [14, 20],
  links: [
    { title: 'To Our Health', href: 'https://homecoming.wiki/wiki/Dark_Watcher_(Praetorian)#To_Our_Health' },
  ],
  flashback: {
    id: '18.52',
    levelRange: [20, 24],
    morality: 'all',
  },
}
