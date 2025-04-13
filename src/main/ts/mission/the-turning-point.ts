import { MissionData } from 'coh-content-db'
import { CalvinScottPraetorian } from '../contact/calvin-scott-praetorian'

export const TheTurningPoint: MissionData = {
  key: 'the-turning-point',
  name: 'The Turning Point',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: CalvinScottPraetorian.key,
  levelRange: [14, 20],
  links: [
    { title: 'The Turning Point', href: 'https://homecoming.wiki/wiki/Calvin_Scott_(Praetorian)#The_Turning_Point' },
  ],
  flashback: {
    id: '18.47',
    levelRange: [20, 24],
    morality: 'all',
  },
}
