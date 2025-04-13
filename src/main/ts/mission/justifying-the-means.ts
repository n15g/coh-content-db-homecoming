import { MissionData } from 'coh-content-db'
import { Ricochet } from '../contact/ricochet'

export const JustifyingTheMeans: MissionData = {
  key: 'justifying-the-means',
  name: 'Justifying the Means',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: Ricochet.key,
  levelRange: [1, 10],
  links: [
    { title: 'Justifying the Means', href: 'https://homecoming.wiki/wiki/Ricochet#Justifying_the_Means' },
  ],
  flashback: {
    id: '18.09',
    levelRange: [10, 14],
    morality: 'all',
  },
}
