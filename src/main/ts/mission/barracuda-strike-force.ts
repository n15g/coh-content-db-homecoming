import { MissionData } from 'coh-content-db'
import { Barracuda } from '../contact/barracuda'

export const BarracudaStrikeForce: MissionData = {
  key: 'barracuda-strike-force',
  name: 'Barracuda Strike Force',
  type: 'strike-force',
  morality: 'villainous',
  contactKeys: Barracuda.key,
  levelRange: [45],
  links: [
    { title: 'Barracuda Strike Force', href: 'https://homecoming.wiki/wiki/Barracuda_Strike_Force' },
  ],
}
