import { MissionData } from 'coh-content-db'
import { ChanceMcKnight } from '../contact/chance-mcknight'

export const OneWeakness: MissionData = {
  key: 'one-weakness',
  name: 'One Weakness',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: ChanceMcKnight.key,
  levelRange: [8, 15],
  links: [
    { title: 'One Weakness', href: 'https://homecoming.wiki/wiki/Chance_McKnight#Corp_Wars' },
  ],
  flashback: {
    id: '18.21',
    levelRange: [15, 19],
    morality: 'all',
  },
}
