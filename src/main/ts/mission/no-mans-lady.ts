import { MissionData } from 'coh-content-db'
import { Cleopatra } from '../contact/cleopatra'

export const NoMansLady: MissionData = {
  key: 'no-mans-lady',
  name: `No Man's Lady`,
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: Cleopatra.key,
  levelRange: [1, 10],
  links: [
    { title: `No Man's Lady`, href: `https://homecoming.wiki/wiki/Cleopatra#No_Man's_Lady` },
  ],
  flashback: {
    id: '18.04',
    levelRange: [10, 14],
    morality: 'all',
  },
}
