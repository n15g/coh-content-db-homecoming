import { MissionData } from 'coh-content-db'
import { BlackScorpion } from '../contact/black-scorpion'

export const TimeAfterTimeBlackScorpion: MissionData = {
  key: 'time-after-time-black-scorpion',
  name: 'Time After Time (Black Scorpion)',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: BlackScorpion.key,
  levelRange: [45],
  links: [
    { title: 'Time After Time (Black Scorpion)', href: 'https://homecoming.wiki/wiki/Black_Scorpion#Time_after_Time' },
  ],
  flashback: {
    id: '7.41',
    levelRange: [50],
  },
}
