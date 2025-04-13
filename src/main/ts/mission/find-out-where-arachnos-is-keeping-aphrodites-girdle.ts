import { MissionData } from 'coh-content-db'
import { Ganymede } from '../contact/ganymede'

export const FindOutWhereArachnosIsKeepingAphroditesGirdle: MissionData = {
  key: 'find-out-where-arachnos-is-keeping-aphrodites-girdle',
  name: `Find out where Arachnos is keeping Aphrodite's girdle`,
  type: 'mission',
  morality: 'heroic',
  contactKeys: Ganymede.key,
  levelRange: [1],
  links: [
    { title: `Find out where Arachnos is keeping Aphrodite's girdle`, href: 'https://homecoming.wiki/wiki/Ganymede#Bring_the_girdle_of_Aphrodite_back_to_Ganymede' },
  ],
}
