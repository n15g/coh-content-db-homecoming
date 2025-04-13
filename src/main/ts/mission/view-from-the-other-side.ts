import { MissionData } from 'coh-content-db'
import { AntiMatter } from '../contact/anti-matter'

export const ViewFromTheOtherSide: MissionData = {
  key: 'view-from-the-other-side',
  name: 'View from the Other Side',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: AntiMatter.key,
  levelRange: [14, 20],
  links: [
    { title: 'View from the Other Side', href: 'https://homecoming.wiki/wiki/Anti-Matter#View_from_the_Other_Side' },
  ],
  flashback: {
    id: '18.39',
    levelRange: [20, 24],
    morality: 'all',
  },
}
