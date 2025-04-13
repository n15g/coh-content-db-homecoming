import { MissionData } from 'coh-content-db'
import { Beholder } from '../contact/beholder'

export const PowerOfTheMind: MissionData = {
  key: 'power-of-the-mind',
  name: 'Power of the Mind',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: Beholder.key,
  levelRange: [8, 15],
  links: [
    { title: 'Power of the Mind', href: 'https://homecoming.wiki/wiki/Beholder#Power_of_the_Mind' },
  ],
  flashback: {
    id: '18.28',
    levelRange: [15, 19],
    morality: 'all',
  },
}
