import { MissionData } from 'coh-content-db'
import { SilverMantis } from '../contact/silver-mantis'

export const SilverMantisStrikeForce: MissionData = {
  key: 'silver-mantis-strike-force',
  name: 'Silver Mantis Strike Force',
  type: 'strike-force',
  morality: 'villainous',
  contactKeys: SilverMantis.key,
  levelRange: [20, 25],
  links: [
    { title: 'Silver Mantis Strike Force', href: 'https://homecoming.wiki/wiki/Silver_Mantis_Strike_Force' },
  ],
}
