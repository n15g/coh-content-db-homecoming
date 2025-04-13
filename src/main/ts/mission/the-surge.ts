import { MissionData } from 'coh-content-db'
import { Helix } from '../contact/helix'

export const TheSurge: MissionData = {
  key: 'the-surge',
  name: 'The Surge',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: Helix.key,
  levelRange: [14, 20],
  links: [
    { title: 'The Surge', href: 'https://homecoming.wiki/wiki/Helix#The_Surge' },
  ],
  flashback: {
    id: '18.46',
    name: 'Fresh Faces',
    levelRange: [20, 24],
    morality: 'all',
  },
}
