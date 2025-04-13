import { MissionData } from 'coh-content-db'
import { Scirocco } from '../contact/scirocco'

export const TheHammerOfTheWorld: MissionData = {
  key: 'the-hammer-of-the-world',
  name: 'The Hammer of the World',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: Scirocco.key,
  levelRange: [40],
  links: [
    { title: 'The Hammer of the World', href: 'https://homecoming.wiki/wiki/Scirocco#The_Hammer_of_the_World_(40-50)' },
  ],
  flashback: {
    id: '7.51',
    levelRange: [50],
  },
}
