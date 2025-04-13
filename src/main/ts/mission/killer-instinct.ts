import { MissionData } from 'coh-content-db'
import { CaptainMako } from '../contact/captain-mako'

export const KillerInstinct: MissionData = {
  key: 'killer-instinct',
  name: 'Killer Instinct',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: CaptainMako.key,
  levelRange: [40],
  links: [
    { title: 'Killer Instinct', href: 'https://homecoming.wiki/wiki/Captain_Mako#Killer_Instinct' },
  ],
  flashback: {
    id: '7.42',
    levelRange: [50],
  },
}
