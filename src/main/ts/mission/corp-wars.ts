import { MissionData } from 'coh-content-db'
import { ChanceMcKnight } from '../contact/chance-mcknight'

export const CorpWars: MissionData = {
  key: 'corp-wars',
  name: 'Corp Wars',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: ChanceMcKnight.key,
  levelRange: [8, 15],
  links: [
    { title: 'Corp Wars', href: 'https://homecoming.wiki/wiki/Chance_McKnight#Corp_Wars' },
  ],
  flashback: {
    id: '18.20',
    name: 'The Syndicate Corp Wars',
    levelRange: [15, 19],
    morality: 'all',
  },
}
