import { MissionData } from 'coh-content-db'
import { PraetorWhite } from '../contact/praetor-white'

export const JoiningThePack: MissionData = {
  key: 'joining-the-pack',
  name: 'Joining the Pack',
  type: 'personal-story',
  morality: 'loyalist',
  contactKeys: PraetorWhite.key,
  levelRange: [1, 10],
  links: [
    { title: 'Joining the Pack', href: 'https://homecoming.wiki/wiki/Marauder#Joining_the_Pack' },
  ],
  flashback: {
    id: '18.01',
    levelRange: [10, 14],
    morality: 'all',
  },
}
