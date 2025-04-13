import { MissionData } from 'coh-content-db'
import { CaptainMako } from '../contact/captain-mako'

export const ThePerfectKillingMachine: MissionData = {
  key: 'the-perfect-killing-machine',
  name: 'The Perfect Killing Machine',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: CaptainMako.key,
  levelRange: [40],
  links: [
    { title: 'The Perfect Killing Machine', href: 'https://homecoming.wiki/wiki/Captain_Mako#The_Perfect_Killing_Machine' },
  ],
  flashback: {
    id: '7.43',
    levelRange: [50],
  },
}
