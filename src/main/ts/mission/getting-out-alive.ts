import { MissionData } from 'coh-content-db'
import { TunnelRat } from '../contact/tunnel-rat'

export const GettingOutAlive: MissionData = {
  key: 'getting-out-alive',
  name: 'Getting Out Alive',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: TunnelRat.key,
  levelRange: [1, 10],
  links: [
    { title: 'Getting Out Alive', href: 'https://homecoming.wiki/wiki/Tunnel_Rat_(Contact)#Getting_Out_Alive' },
  ],
  flashback: {
    id: '18.14',
    levelRange: [10, 14],
    morality: 'all',
  },
}
