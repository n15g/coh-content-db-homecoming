import { MissionData } from 'coh-content-db'
import { Neuron } from '../contact/neuron'

export const AGodAmongstMen: MissionData = {
  key: 'a-god-amongst-men',
  name: 'A God Amongst Men',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: Neuron.key,
  levelRange: [14, 20],
  links: [
    { title: 'A God Amongst Men', href: 'https://homecoming.wiki/wiki/Neuron#A_God_Amongst_Men' },
  ],
  flashback: {
    id: '18.43',
    levelRange: [20, 24],
    morality: 'all',
  },
}
