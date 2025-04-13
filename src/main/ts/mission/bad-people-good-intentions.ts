import { MissionData } from 'coh-content-db'
import { RoyCooling } from '../contact/roy-cooling'

export const BadPeopleGoodIntentions: MissionData = {
  key: 'bad-people-good-intentions',
  name: 'Bad People, Good Intentions',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: RoyCooling.key,
  levelRange: [20, 29],
  links: [
    { title: 'Bad People, Good Intentions', href: 'https://homecoming.wiki/wiki/Roy_Cooling#Bad_People,_Good_Intentions' },
  ],
  flashback: {
    id: '19.01',
    levelRange: [25, 29],
  },
}
