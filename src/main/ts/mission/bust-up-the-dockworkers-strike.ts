import { MissionData } from 'coh-content-db'
import { LorenzAnsaldo } from '../contact/lorenz-ansaldo'

export const BustUpTheDockworkersStrike: MissionData = {
  key: 'bust-up-the-dockworkers-strike',
  name: `Bust up the dockworker's strike`,
  type: 'mission',
  morality: 'villainous',
  contactKeys: LorenzAnsaldo.key,
  levelRange: [20, 24],
  links: [
    { title: `Bust up the dockworker's strike`, href: `https://homecoming.wiki/wiki/Lorenz_Ansaldo#Bust_up_the_dockworker's_strike` },
  ],
  flashback: {
    id: '6.30',
    levelRange: [20, 24],
  },
}
