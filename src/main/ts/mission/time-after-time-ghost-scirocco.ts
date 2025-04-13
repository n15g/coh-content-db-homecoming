import { MissionData } from 'coh-content-db'
import { Scirocco } from '../contact/scirocco'

export const TimeAfterTimeScirocco: MissionData = {
  key: 'time-after-time-scirocco',
  name: 'Time After Time (Scirocco)',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: Scirocco.key,
  levelRange: [45],
  links: [
    { title: 'Time After Time (Scirocco)', href: 'https://homecoming.wiki/wiki/Scirocco#Time_after_Time_(45-50)' },
  ],
  flashback: {
    id: '7.53',
    levelRange: [50],
  },
}
