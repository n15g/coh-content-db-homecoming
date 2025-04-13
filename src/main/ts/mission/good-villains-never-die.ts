import { MissionData } from 'coh-content-db'
import { Leonard } from '../contact/leonard'

export const GoodVillainsNeverDie: MissionData = {
  key: 'good-villains-never-die',
  name: 'Good Villains Never Die',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: Leonard.key,
  levelRange: [20, 29],
  links: [
    { title: 'Good Villains Never Die', href: 'https://homecoming.wiki/wiki/Leonard#Good_Villains_Never_Die_(20-29)' },
  ],
  flashback: {
    id: '17.04',
    levelRange: [25, 29],
  },
}
