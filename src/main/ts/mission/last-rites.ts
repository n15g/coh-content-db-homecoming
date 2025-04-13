import { MissionData } from 'coh-content-db'
import { GrahamEaston } from '../contact/graham-easton'

export const LastRites: MissionData = {
  key: 'last-rites',
  name: 'Last Rites',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: GrahamEaston.key,
  levelRange: [15, 24],
  links: [
    { title: 'Last Rites', href: 'https://homecoming.wiki/wiki/Graham_Easton#Last_Rites' },
  ],
  flashback: {
    id: '22.02',
    levelRange: [20, 24],
  },
}
