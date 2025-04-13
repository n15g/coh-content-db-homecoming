import { MissionData } from 'coh-content-db'
import { DrAeon } from '../contact/dr-aeon'

export const DrAeonStrikeForce: MissionData = {
  key: 'dr-aeon-strike-force',
  name: 'Dr. Aeon Strike Force',
  type: 'strike-force',
  morality: 'villainous',
  contactKeys: DrAeon.key,
  levelRange: [35],
  links: [
    { title: 'Dr. Aeon Strike Force', href: 'https://homecoming.wiki/wiki/Dr._Aeon_Strike_Force' },
  ],
}
