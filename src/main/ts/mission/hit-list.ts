import { MissionData } from 'coh-content-db'
import { ChiefInterrogatorWashington } from '../contact/chief-interrogator-washington'

export const HitList: MissionData = {
  key: 'hit-list',
  name: 'Hit List',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: ChiefInterrogatorWashington.key,
  levelRange: [1, 10],
  links: [
    { title: 'Hit List', href: 'https://homecoming.wiki/wiki/Chief_Interrogator_Washington#Hit_List' },
  ],
  flashback: {
    id: '18.02',
    levelRange: [10, 14],
    morality: 'all',
  },
}
