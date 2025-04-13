import { MissionData } from 'coh-content-db'
import { DrGraves } from '../contact/dr-graves'

export const TheHeartsOfDarknessRoguesContest: MissionData = {
  key: 'the-hearts-of-darkness-rogues-contest',
  name: `The Hearts of Darkness - Rogues' Contest`,
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: DrGraves.key,
  levelRange: [5, 9],
  links: [
    { title: `The Hearts of Darkness - Rogues' Contest`, href: `https://homecoming.wiki/wiki/Dr._Graves#The_Hearts_of_Darkness_-_Rogues'_Contest_(Level_5-9)` },
  ],
  flashback: {
    id: '21.12',
    name: `Rogues' Contest`,
    levelRange: [1, 9],
  },
}
