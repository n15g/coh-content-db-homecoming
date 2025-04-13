import { MissionData } from 'coh-content-db'
import { LarsHansen } from '../contact/lars-hansen'

export const AMadmansCouncil: MissionData = {
  key: 'a-madmans-council',
  name: `A Madman's Council`,
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: LarsHansen.key,
  levelRange: [25, 29],
  links: [
    { title: `A Madman's Council`, href: `https://homecoming.wiki/wiki/Lars_Hansen#A_Madman's_Council_(25-29)` },
  ],
  flashback: {
    id: '3.04',
    levelRange: [25, 29],
  },
}
