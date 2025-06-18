import { MissionData } from 'coh-content-db'
import { AdelardZiegler } from '../contact/adelard-ziegler'

export const HuntingTheHunters: MissionData = {
  key: 'hunting-the-hunters',
  name: 'Hunting the Hunters',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: AdelardZiegler.key,
  levelRange: [40, 50],
  links: [
    { title: 'Hunting the Hunters', href: 'https://homecoming.wiki/wiki/Adelard_Ziegler#Hunting_the_Hunters' },
  ],
  flashback: {
    id: '28.06',
    levelRange: [50],
  },
}
