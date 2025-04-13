import { MissionData } from 'coh-content-db'
import { Kalinda } from '../contact/kalinda'

export const EarningArachnosFavor: MissionData = {
  key: 'earning-arachnos-favor',
  name: `Earning Arachnos' Favor`,
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: Kalinda.key,
  levelRange: [1, 9],
  links: [
    { title: `Earning Arachnos' Favor`, href: `https://homecoming.wiki/wiki/Kalinda#Earning_Arachnos'_Favor` },
  ],
  flashback: {
    id: '6.01',
    levelRange: [1, 9],
  },
}
