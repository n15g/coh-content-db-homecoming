import { MissionData } from 'coh-content-db'
import { OperativeRenault } from '../contact/operative-renault'

export const OperativeRenaultStrikeForce: MissionData = {
  key: 'operative-renault-strike-force',
  name: 'Operative Renault Strike Force',
  type: 'strike-force',
  morality: 'villainous',
  contactKeys: OperativeRenault.key,
  levelRange: [25, 30],
  links: [
    { title: 'Operative Renault Strike Force', href: 'https://homecoming.wiki/wiki/Operative_Renault_Strike_Force' },
  ],
}
