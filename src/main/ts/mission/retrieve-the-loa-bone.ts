import { MissionData } from 'coh-content-db'
import { MrBocor } from '../contact/mr-bocor'

export const RetrieveTheLoaBone: MissionData = {
  key: 'retrieve-the-loa-bone',
  name: 'Retrieve the Loa Bone',
  type: 'mission',
  morality: 'villainous',
  contactKeys: MrBocor.key,
  levelRange: [6, 9],
  links: [
    { title: 'Retrieve the Loa Bone', href: 'https://homecoming.wiki/wiki/Mr._Bocor#Retrieve_the_Loa_Bone_(6-9)' },
  ],
  flashback: {
    id: '6.09',
    name: `The Loa Bone`,
    levelRange: [1, 9],
  },
}
