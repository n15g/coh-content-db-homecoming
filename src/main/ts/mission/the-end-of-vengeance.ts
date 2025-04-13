import { MissionData } from 'coh-content-db'
import { Max } from '../contact/max'

export const TheEndOfVengeance: MissionData = {
  key: 'the-end-of-vengeance',
  name: 'The End of Vengeance',
  type: 'mission',
  morality: 'heroic',
  contactKeys: Max.key,
  levelRange: [50],
  links: [
    { title: 'The End of Vengeance', href: 'https://homecoming.wiki/wiki/Max#The_End_of_Vengeance' },
  ],
  flashback: {
    id: '22.14',
    levelRange: [50],
  },
}
