import { MissionData } from 'coh-content-db'
import { OperativeKuzmin } from '../contact/operative-kuzmin'

export const UnderdogsNeverWin: MissionData = {
  key: 'underdogs-never-win',
  name: 'Underdogs Never Win',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: OperativeKuzmin.key,
  levelRange: [1, 7],
  links: [
    { title: 'Underdogs Never Win', href: 'https://homecoming.wiki/wiki/Operative_Kuzmin#Underdogs_Never_Win' },
  ],
  flashback: {
    id: '21.05',
    levelRange: [1, 9],
  },
}
