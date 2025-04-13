import { MissionData } from 'coh-content-db'
import { GhostWidow } from '../contact/ghost-widow'

export const LifeAndDeath: MissionData = {
  key: 'life-and-death',
  name: 'Life and Death',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: GhostWidow.key,
  levelRange: [40],
  links: [
    { title: 'Life and Death', href: 'https://homecoming.wiki/wiki/Ghost_Widow#Life_and_Death_(40-50)' },
  ],
  flashback: {
    id: '7.47',
    levelRange: [50],
  },
}
