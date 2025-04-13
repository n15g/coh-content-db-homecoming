import { MissionData } from 'coh-content-db'
import { MrGPrimal } from '../contact/mr-g-primal'

export const UnavoidableFateWuYin: MissionData = {
  key: 'unavoidable-fate-wu-yin',
  name: 'Unavoidable Fate (Wu Yin)',
  type: 'personal-story',
  morality: 'villainous',
  contactKeys: MrGPrimal.key,
  levelRange: [30],
  links: [
    { title: 'Unavoidable Fate', href: 'https://homecoming.wiki/wiki/Mr._G_(Primal_Earth)#Unavoidable_Fate' },
  ],
  flashback: {
    id: '24.14',
    name: `Wu Yin's Personal Story`,
    levelRange: [50],
  },
}
