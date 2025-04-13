import { MissionData } from 'coh-content-db'
import { LorenzoTate } from '../contact/lorenzo-tate'
import { ElizaThorpe } from '../contact/eliza-thorpe'

export const StopTheLostAttack: MissionData = {
  key: 'stop-the-lost-attack',
  name: 'Stop the Lost attack',
  type: 'mission',
  morality: 'heroic',
  contactKeys: [ElizaThorpe.key, LorenzoTate.key],
  levelRange: [25, 29],
  links: [
    { title: 'Stop the Lost attack (Eliza Thorpe)', href: 'https://homecoming.wiki/wiki/Eliza_Thorpe#Stop_the_Lost_attack_(25-29)' },
    { title: 'Stop the Lost attack (Lorenzo Tate)', href: 'https://homecoming.wiki/wiki/Lorenzo_Tate#Stop_the_Lost_attack_(25-29)' },
  ],
  flashback: {
    id: '0.42',
    name: 'Lost Motivation',
    levelRange: [25, 29],
  },
}
