import { MissionData } from 'coh-content-db'
import { MrGPrimal } from '../contact/mr-g-primal'

export const TheEndOfAYin: MissionData = {
  key: 'the-end-of-a-yin',
  name: 'The End of a Yin',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: MrGPrimal.key,
  levelRange: [30],
  links: [
    { title: 'The End of a Yin', href: 'https://homecoming.wiki/wiki/Mr._G_(Primal_Earth)#The_End_of_a_Yin' },
  ],
  flashback: {
    id: '24.13',
    levelRange: [50],
  },
}
