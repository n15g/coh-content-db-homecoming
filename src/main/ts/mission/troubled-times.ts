import { MissionData } from 'coh-content-db'
import { DrStribbling } from '../contact/dr-stribbling'

export const TroubledTimes: MissionData = {
  key: 'troubled-times',
  name: 'Troubled Times',
  type: 'story-arc',
  morality: 'vigilante',
  contactKeys: DrStribbling.key,
  levelRange: [30, 34],
  links: [
    { title: 'Troubled Times', href: 'https://homecoming.wiki/wiki/Dr._Stribbling#Troubled_Times' },
  ],
  flashback: {
    id: '27.08',
    name: `Emperor Cole's Personal Story`,
    levelRange: [30, 34],
  },
}
