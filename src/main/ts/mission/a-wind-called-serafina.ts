import { MissionData } from 'coh-content-db'
import { Scirocco } from '../contact/scirocco'

export const AWindCalledSerafina: MissionData = {
  key: 'a-wind-called-serafina',
  name: 'A Wind Called Serafina',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: Scirocco.key,
  levelRange: [40],
  links: [
    { title: 'A Wind Called Serafina', href: 'https://homecoming.wiki/wiki/Scirocco#A_Wind_Called_Serafina_(40-50)' },
  ],
  flashback: {
    id: '7.50',
    levelRange: [50],
  },
}
