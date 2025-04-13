import { MissionData } from 'coh-content-db'
import { IVy } from '../contact/ivy'

export const TheOldRobotTheNewBody: MissionData = {
  key: 'the-old-robot-the-new-body',
  name: 'The Old Robot, the New Body',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: IVy.key,
  levelRange: [14, 20],
  links: [
    { title: 'The Old Robot, the New Body', href: 'https://homecoming.wiki/wiki/IVy#The_Old_Robot,_the_New_Body' },
  ],
  flashback: {
    id: '18.37',
    levelRange: [20, 24],
    morality: 'all',
  },
}
