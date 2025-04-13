import { MissionData } from 'coh-content-db'
import { TimothyRaymond } from '../contact/timothy-raymond'

export const LostAndFoundTimothyRaymond: MissionData = {
  key: 'lost-and-found-timothy-raymond',
  name: 'Lost and Found (Timothy Raymond)',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: TimothyRaymond.key,
  levelRange: [30, 34],
  links: [
    { title: 'Lost and Found', href: 'https://homecoming.wiki/wiki/Timothy_Raymond#Lost_and_Found' },
  ],
  flashback: {
    id: '6.55',
    levelRange: [30, 34],
  },
}
