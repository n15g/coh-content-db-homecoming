import { MissionData } from 'coh-content-db'
import { ShaunaBraun } from '../contact/shauna-braun'

export const DirtyWork: MissionData = {
  key: 'dirty-work',
  name: 'Dirty Work',
  type: 'story-arc',
  morality: 'vigilante',
  contactKeys: ShaunaBraun.key,
  levelRange: [25, 29],
  links: [
    { title: 'Dirty Work', href: 'https://homecoming.wiki/wiki/Shauna_Braun#Dirty_Work' },
  ],
  flashback: {
    id: '26.01',
    levelRange: [25, 29],
  },
}
