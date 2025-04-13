import { MissionData } from 'coh-content-db'
import { Bobcat } from '../contact/bobcat'

export const BestFriendsForever: MissionData = {
  key: 'best-friends-forever',
  name: 'Best Friends Forever',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: Bobcat.key,
  levelRange: [14, 20],
  links: [
    { title: 'Best Friends Forever', href: 'https://homecoming.wiki/wiki/Bobcat#Best_Friends_Forever' },
  ],
  flashback: {
    id: '18.42',
    levelRange: [20, 24],
    morality: 'all',
  },
}
