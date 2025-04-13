import { MissionData } from 'coh-content-db'
import { OfficerFields } from '../contact/officer-fields'

export const NoMoreFears: MissionData = {
  key: 'no-more-fears',
  name: 'No More Fears',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: OfficerFields.key,
  levelRange: [1, 7],
  links: [
    { title: 'No More Fears', href: 'https://homecoming.wiki/wiki/Officer_Fields#No_More_Fears' },
  ],
  flashback: {
    id: '21.02',
    levelRange: [1, 9],
  },
}
