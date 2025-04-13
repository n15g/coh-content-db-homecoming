import { MissionData } from 'coh-content-db'
import { DeputyAssistantOfInformation } from '../contact/deputy-assistant-of-information'

export const ShrewdLessons: MissionData = {
  key: 'shrewd-lessons',
  name: 'Shrewd Lessons',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: DeputyAssistantOfInformation.key,
  levelRange: [1, 10],
  links: [
    { title: 'Shrewd Lessons', href: 'https://homecoming.wiki/wiki/Deputy_Assistant_of_Information#Shrewd_Lessons' },
  ],
  flashback: {
    id: '18.05',
    levelRange: [10, 14],
    morality: 'all',
  },
}
