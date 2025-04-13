import { MissionData } from 'coh-content-db'
import { AlecParson } from '../contact/alec-parson'

export const ClockFace: MissionData = {
  key: 'clock-face',
  name: 'Clock Face',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: AlecParson.key,
  levelRange: [8, 15],
  links: [
    { title: 'Clock Face', href: 'https://homecoming.wiki/wiki/Alec_Parson#Clock_Face' },
  ],
  flashback: {
    id: '18.18',
    name: `The CLock Face`,
    levelRange: [15, 19],
    morality: 'all',
  },
}
