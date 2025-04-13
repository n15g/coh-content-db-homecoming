import { MissionData } from 'coh-content-db'
import { CaptainMako } from '../contact/captain-mako'

export const TimeAfterTimeCaptainMako: MissionData = {
  key: 'time-after-time-captain-mako',
  name: 'Time After Time (Captain Mako)',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: CaptainMako.key,
  levelRange: [45],
  links: [
    { title: 'Time After Time (Captain Mako)', href: 'https://homecoming.wiki/wiki/Captain_Mako#Time_After_Time' },
  ],
  flashback: {
    id: '7.45',
    levelRange: [50],
  },
}
