import { MissionData } from 'coh-content-db'
import { LtHarris } from '../contact/lt-harris'

export const PriceOfFriendship: MissionData = {
  key: 'price-of-friendship',
  name: 'Price of Friendship',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: LtHarris.key,
  levelRange: [1, 7],
  links: [
    { title: 'Price of Friendship', href: 'https://homecoming.wiki/wiki/Lt._Harris#Price_of_Friendship' },
  ],
  flashback: {
    id: '21.08',
    levelRange: [1, 9],
  },
}
