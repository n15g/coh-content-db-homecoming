import { MissionData } from 'coh-content-db'
import { InvestigatorWhitworth } from '../contact/investigator-whitworth'

export const TheTrashCollectors: MissionData = {
  key: 'the-trash-collectors',
  name: 'The Trash Collectors',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: InvestigatorWhitworth.key,
  levelRange: [8, 15],
  links: [
    { title: 'The Trash Collectors', href: 'https://homecoming.wiki/wiki/Investigator_Whitworth#The_Trash_Collectors' },
  ],
  flashback: {
    id: '18.19',
    levelRange: [15, 19],
    morality: 'all',
  },
}
