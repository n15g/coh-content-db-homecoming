import { MissionData } from 'coh-content-db'
import { Seer1381 } from '../contact/seer-1381'

export const YouCantGoHome: MissionData = {
  key: 'you-cant-go-home',
  name: `You Can't Go Home`,
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: Seer1381.key,
  levelRange: [8, 15],
  links: [
    { title: `You Can't Go Home`, href: `https://homecoming.wiki/wiki/Seer_1381#You_Can%5C't_Go_Home` },
  ],
  flashback: {
    id: '18.XX',
    levelRange: [15, 19],
    morality: 'all',
  },
}
