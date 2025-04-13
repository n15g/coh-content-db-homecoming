import { MissionData } from 'coh-content-db'
import { DocDelilah } from '../contact/doc-delilah'

export const TheBuriedPast: MissionData = {
  key: 'the-buried-past',
  name: 'The Buried Past',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: DocDelilah.key,
  levelRange: [20, 24],
  links: [
    { title: 'The Buried Past', href: 'https://homecoming.wiki/wiki/Doc_Delilah#The_Buried_Past_(20-24)' },
  ],
  flashback: {
    id: '8.03',
    levelRange: [20, 24],
  },
}
