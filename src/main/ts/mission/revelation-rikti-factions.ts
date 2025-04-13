import { MissionData } from 'coh-content-db'
import { StevenSheridan } from '../contact/steven-sheridan'

export const RevelationRiktiFactions: MissionData = {
  key: 'revelation-rikti-factions',
  name: 'Revelation: Rikti Factions',
  type: 'mission',
  morality: 'heroic',
  contactKeys: StevenSheridan.key,
  levelRange: [35, 39],
  links: [
    { title: 'Revelation: Rikti Factions', href: 'https://homecoming.wiki/wiki/Steven_Sheridan#Revelation:_Rikti_Factions_(35-39)' },
  ],
  flashback: {
    id: '0.43',
    levelRange: [35, 39],
  },
}
