import { MissionData } from 'coh-content-db'
import { MrGPrimal } from '../contact/mr-g-primal'

export const CriminalsOfWar: MissionData = {
  key: 'criminals-of-war',
  name: 'Criminals of War',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: MrGPrimal.key,
  levelRange: [30],
  links: [
    { title: 'Criminals of War', href: 'https://homecoming.wiki/wiki/Mr._G_(Primal_Earth)#Criminals_of_War' },
  ],
  flashback: {
    id: '24.11',
    levelRange: [50],
  },
}
