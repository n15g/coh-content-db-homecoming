import { MissionData } from 'coh-content-db'
import { SisterValeria } from '../contact/sister-valeria'

export const GloryAndDarkTidings: MissionData = {
  key: 'glory-and-dark-tidings',
  name: 'Glory and Dark Tidings',
  type: 'story-arc',
  morality: 'primal',
  contactKeys: SisterValeria.key,
  levelRange: [50],
  links: [
    { title: 'Glory and Dark Tidings', href: 'https://homecoming.wiki/wiki/Sister_Valeria#Glory_and_Dark_Tidings' },
  ],
  flashback: {
    id: '27.04',
    levelRange: [50],
  },
}
