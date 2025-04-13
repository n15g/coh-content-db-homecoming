import { MissionData } from 'coh-content-db'
import { Levantera } from '../contact/levantera'

export const TheStrangeCaseOfBenjaminADecker: MissionData = {
  key: 'the-strange-case-of-benjamin-a-decker',
  name: 'The Strange Case of Benjamin A. Decker',
  type: 'story-arc',
  morality: 'primal',
  contactKeys: Levantera.key,
  levelRange: [35],
  links: [
    { title: 'The Strange Case of Benjamin A. Decker', href: 'https://homecoming.wiki/wiki/Levantera#The_Strange_Case_of_Benjamin_A._Decker_(35-50)' },
  ],
  flashback: {
    id: '10.02',
    levelRange: [50],
  },
}
