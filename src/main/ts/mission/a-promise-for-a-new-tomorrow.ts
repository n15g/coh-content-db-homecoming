import { MissionData } from 'coh-content-db'
import { DarkWatcher } from '../contact/dark-watcher'

export const APromiseForANewTomorrow: MissionData = {
  key: 'a-promise-for-a-new-tomorrow',
  name: 'A Promise for a New Tomorrow',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: DarkWatcher.key,
  levelRange: [14, 20],
  links: [
    { title: 'A Promise for a New Tomorrow', href: 'https://homecoming.wiki/wiki/Dark_Watcher_(Praetorian)#A_Promise_for_a_New_Tomorrow' },
  ],
  flashback: {
    id: '18.51',
    levelRange: [20, 24],
    morality: 'all',
  },
}
