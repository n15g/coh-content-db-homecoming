import { MissionData } from 'coh-content-db'
import { Neuron } from '../contact/neuron'

export const PrideInYourWork: MissionData = {
  key: 'pride-in-your-work',
  name: 'Pride in Your Work',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: Neuron.key,
  levelRange: [14, 20],
  links: [
    { title: 'Pride in Your Work', href: 'https://homecoming.wiki/wiki/Neuron#Pride_in_Your_Work' },
  ],
  flashback: {
    id: '18.44',
    levelRange: [20, 24],
    morality: 'all',
  },
}
