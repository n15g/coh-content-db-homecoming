import { MissionData } from 'coh-content-db'
import { TheDarkWatcher } from '../contact/the-dark-watcher'

export const TheHorrorOfWar: MissionData = {
  key: 'the-horror-of-war',
  name: 'The Horror of War',
  type: 'story-arc',
  morality: 'primal',
  contactKeys: TheDarkWatcher.key,
  levelRange: [45],
  links: [
    { title: 'The Horror of War', href: 'https://homecoming.wiki/wiki/The_Dark_Watcher_(Primal_Earth)#The_Horror_of_War_(45-50)' },
  ],
  flashback: {
    id: '10.05',
    levelRange: [50],
  },
}
