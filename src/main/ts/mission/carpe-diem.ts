import { MissionData } from 'coh-content-db'
import { LorenzAnsaldo } from '../contact/lorenz-ansaldo'

export const CarpeDiem: MissionData = {
  key: 'carpe-diem',
  name: 'Carpe Diem',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: LorenzAnsaldo.key,
  levelRange: [20, 24],
  links: [
    { title: 'Carpe Diem', href: 'https://homecoming.wiki/wiki/Lorenz_Ansaldo#Carpe_Diem' },
  ],
  flashback: {
    id: '6.29',
    levelRange: [20, 24],
  },
}
