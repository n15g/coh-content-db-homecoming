import { MissionData } from 'coh-content-db'
import { TalshakTheMystic } from '../contact/talshak-the-mystic'

export const TheHeartOfTheHollows: MissionData = {
  key: 'the-heart-of-the-hollows',
  name: 'The Heart of the Hollows',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: TalshakTheMystic.key,
  levelRange: [12, 14],
  links: [
    { title: 'The Heart of the Hollows', href: 'https://homecoming.wiki/wiki/Talshak_the_Mystic#The_Heart_of_the_Hollows_(12-14)' },
  ],
  flashback: {
    id: '04',
    levelRange: [10, 14],
  },
}
