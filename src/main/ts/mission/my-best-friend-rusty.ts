import { MissionData } from 'coh-content-db'
import { PenelopeYinPraetorian } from '../contact/penelope-yin-praetorian'

export const MyBestFriendRusty: MissionData = {
  key: 'my-best-friend-rusty',
  name: 'My Best Friend, Rusty',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: PenelopeYinPraetorian.key,
  levelRange: [14, 20],
  links: [
    { title: 'My Best Friend, Rusty', href: 'https://homecoming.wiki/wiki/Penelope_Yin_(Praetorian)#My_Best_Friend,_Rusty' },
  ],
  flashback: {
    id: '18.50',
    levelRange: [20, 24],
    morality: 'all',
  },
}
