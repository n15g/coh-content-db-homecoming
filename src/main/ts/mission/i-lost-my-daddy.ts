import { MissionData } from 'coh-content-db'
import { PenelopeYinFaultline } from '../contact/penelope-yin-faultline'

export const ILostMyDaddy: MissionData = {
  key: 'i-lost-my-daddy',
  name: 'I Lost My Daddy!',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: PenelopeYinFaultline.key,
  levelRange: [15, 20],
  links: [
    { title: 'I Lost My Daddy!', href: 'https://homecoming.wiki/wiki/Penelope_Yin_(Faultline)#I_Lost_My_Daddy!_(15-20)' },
  ],
  flashback: {
    id: '8.02',
    levelRange: [20, 24],
  },
}
