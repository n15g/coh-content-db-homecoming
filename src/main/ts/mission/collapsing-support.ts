import { MissionData } from 'coh-content-db'
import { CalvinScottPraetorian } from '../contact/calvin-scott-praetorian'

export const CollapsingSupport: MissionData = {
  key: 'collapsing-support',
  name: 'Collapsing Support',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: CalvinScottPraetorian.key,
  levelRange: [14, 20],
  links: [
    { title: 'Collapsing Support', href: 'https://homecoming.wiki/wiki/Calvin_Scott_(Praetorian)#Collapsing_Support' },
  ],
  flashback: {
    id: '18.48',
    levelRange: [20, 24],
    morality: 'all',
  },
}
