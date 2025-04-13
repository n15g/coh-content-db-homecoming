import { MissionData } from 'coh-content-db'
import { Gaussian } from '../contact/gaussian'

export const TheRedAndTheBlack: MissionData = {
  key: 'the-red-and-the-black',
  name: 'The Red and the Black',
  type: 'story-arc',
  morality: 'primal',
  contactKeys: Gaussian.key,
  levelRange: [45],
  links: [
    { title: 'The Red and the Black', href: 'https://homecoming.wiki/wiki/Gaussian#The_Red_and_the_Black_(45-50)' },
  ],
  flashback: {
    id: '10.04',
    levelRange: [50],
  },
}
