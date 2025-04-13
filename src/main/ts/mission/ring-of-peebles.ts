import { MissionData } from 'coh-content-db'
import { StephaniePeebles } from '../contact/stephanie-peebles'

export const RingOfPeebles: MissionData = {
  key: 'ring-of-peebles',
  name: 'Ring of Peebles',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: StephaniePeebles.key,
  levelRange: [20, 24],
  links: [
    { title: 'Ring of Peebles', href: 'https://homecoming.wiki/wiki/Stephanie_Peebles#Ring_of_Peebles_(20-24)' },
  ],
  flashback: {
    id: '3.01',
    levelRange: [25, 29],
  },
}
