import { MissionData } from 'coh-content-db'
import { PraetorSinclair } from '../contact/praetor-sinclair'

export const ThePowerToControl: MissionData = {
  key: 'the-power-to-control',
  name: 'The Power to Control',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: PraetorSinclair.key,
  levelRange: [8, 15],
  links: [
    { title: 'The Power to Control', href: 'https://homecoming.wiki/wiki/Chimera#The_Power_to_Control' },
  ],
  flashback: {
    id: '18.25',
    levelRange: [15, 19],
    morality: 'all',
  },
}
