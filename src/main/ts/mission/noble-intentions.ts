import { MissionData } from 'coh-content-db'
import { JohnHouston } from '../contact/john-houston'

export const NobleIntentions: MissionData = {
  key: 'noble-intentions',
  name: 'Noble Intentions',
  type: 'story-arc',
  morality: 'rogue',
  contactKeys: JohnHouston.key,
  levelRange: [40, 44],
  links: [
    { title: 'Noble Intentions', href: 'https://homecoming.wiki/wiki/John_Houston#Noble_Intentions' },
  ],
  flashback: {
    id: '27.06',
    levelRange: [40, 44],
  },
}
