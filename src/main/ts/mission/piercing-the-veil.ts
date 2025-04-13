import { MissionData } from 'coh-content-db'
import { GordonBower } from '../contact/gordon-bower'

export const PiercingTheVeil: MissionData = {
  key: 'piercing-the-veil',
  name: 'Piercing the Veil',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: GordonBower.key,
  levelRange: [25, 29],
  links: [
    { title: 'Piercing the Veil', href: 'https://homecoming.wiki/wiki/Gordon_Bower#Piercing_the_Veil_(25-29)' },
  ],
  flashback: {
    id: '5.01',
    levelRange: [30, 34],
  },
}
