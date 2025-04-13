import { MissionData } from 'coh-content-db'
import { DrGraves } from '../contact/dr-graves'

export const TheHeartsOfDarknessPriceOfVictory: MissionData = {
  key: 'the-hearts-of-darkness-price-of-victory',
  name: 'The Hearts of Darkness - Price of Victory',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: DrGraves.key,
  levelRange: [15, 19],
  links: [
    { title: 'The Hearts of Darkness - Price of Victory', href: 'https://homecoming.wiki/wiki/Dr._Graves#The_Hearts_of_Darkness_-_Price_of_Victory_(Level_15-19)' },
  ],
  flashback: {
    id: '21.??',
    name: 'Price of Victory',
    levelRange: [15, 19],
  },
}
