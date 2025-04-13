import { MissionData } from 'coh-content-db'
import { JimTemblor } from '../contact/jim-temblor'

export const TheRumblingsOfThePast: MissionData = {
  key: 'the-rumblings-of-the-past',
  name: 'The Rumblings of the Past',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: JimTemblor.key,
  levelRange: [15, 19],
  links: [
    { title: 'The Rumblings of the Past', href: 'https://homecoming.wiki/wiki/Jim_Temblor#The_Rumblings_of_the_Past_(15-20)' },
  ],
  flashback: {
    id: '8.01',
    name: 'Rumblings of the Past',
    levelRange: [20, 24],
  },
}
