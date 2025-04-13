import { MissionData } from 'coh-content-db'
import { DrGraves } from '../contact/dr-graves'

export const TheHeartsOfDarknessHeroicMeasures: MissionData = {
  key: 'the-hearts-of-darkness-heroic-measures',
  name: 'The Hearts of Darkness - Heroic Measures',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: DrGraves.key,
  levelRange: [10, 14],
  links: [
    { title: 'The Hearts of Darkness - Heroic Measures', href: 'https://homecoming.wiki/wiki/Dr._Graves#The_Hearts_of_Darkness_-_Heroic_Measures_(Level_10-14)' },
  ],
  flashback: {
    id: '21.13',
    name: 'Heroic Measures',
    levelRange: [10, 14],
  },
}
