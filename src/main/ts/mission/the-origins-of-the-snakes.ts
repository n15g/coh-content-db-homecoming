import { MissionData } from 'coh-content-db'
import { MatthewBurke } from '../contact/matthew-burke'

export const TheOriginsOfTheSnakes: MissionData = {
  key: 'the-origins-of-the-snakes',
  name: 'The Origins of the Snakes',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: MatthewBurke.key,
  levelRange: [1, 9],
  links: [
    { title: 'The Origins of the Snakes', href: 'https://homecoming.wiki/wiki/Matthew_Burke#The_Origins_of_the_Snakes_(Level_1-9)' },
  ],
  flashback: {
    id: '6.03',
    levelRange: [1, 9],
  },
}
