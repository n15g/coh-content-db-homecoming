import { MissionData } from 'coh-content-db'
import { Warrant } from '../contact/warrant'

export const GunsAndMoney: MissionData = {
  key: 'guns-and-money',
  name: 'Guns and Money',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: Warrant.key,
  levelRange: [1, 9],
  links: [
    { title: 'Guns and Money', href: 'https://homecoming.wiki/wiki/Warrant#Guns_and_Money' },
  ],
  flashback: {
    id: '18.06',
    levelRange: [10, 14],
    morality: 'all',
  },
}
