import { MissionData } from 'coh-content-db'
import { GhostWidow } from '../contact/ghost-widow'

export const MysticMayhem: MissionData = {
  key: 'mystic-mayhem',
  name: 'Mystic Mayhem',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: GhostWidow.key,
  levelRange: [40],
  links: [
    { title: 'Mystic Mayhem', href: 'https://homecoming.wiki/wiki/Ghost_Widow#Mystic_Mayhem_(40-50)' },
  ],
  flashback: {
    id: '7.46',
    levelRange: [50],
  },
}
