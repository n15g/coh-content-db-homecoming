import { MissionData } from 'coh-content-db'
import { GhostWidow } from '../contact/ghost-widow'

export const TimeAfterTimeGhostWidow: MissionData = {
  key: 'time-after-time-ghost-widow',
  name: 'Time After Time (Ghost Widow)',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: GhostWidow.key,
  levelRange: [45],
  links: [
    { title: 'Time After Time (Ghost Widow)', href: 'https://homecoming.wiki/wiki/Ghost_Widow#Time_After_Time_(45-50)' },
  ],
  flashback: {
    id: '7.49',
    levelRange: [50],
  },
}
