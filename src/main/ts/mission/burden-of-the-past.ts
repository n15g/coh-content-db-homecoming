import { MissionData } from 'coh-content-db'
import { HeatherTownshend } from '../contact/heather-townshend'

export const BurdenOfThePast: MissionData = {
  key: 'burden-of-the-past',
  name: 'Burden of the Past',
  type: 'story-arc',
  morality: 'primal',
  contactKeys: HeatherTownshend.key,
  levelRange: [50],
  links: [
    { title: 'Burden of the Past', href: 'https://homecoming.wiki/wiki/Heather_Townshend#Burden_of_the_Past' },
  ],
  flashback: {
    id: '22.07',
    levelRange: [50],
  },
}
