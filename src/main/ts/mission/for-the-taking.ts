import { MissionData } from 'coh-content-db'
import { DrHetzfeld } from '../contact/dr-hetzfeld'

export const ForTheTaking: MissionData = {
  key: 'for-the-taking',
  name: 'For The Taking',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: DrHetzfeld.key,
  levelRange: [14, 20],
  links: [
    { title: 'For The Taking', href: 'https://homecoming.wiki/wiki/Dr._Hetzfeld#For_The_Taking' },
  ],
  flashback: {
    id: '18.41',
    levelRange: [20, 24],
    morality: 'all',
  },
}
