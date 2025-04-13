import { MissionData } from 'coh-content-db'
import { VirgilTarikoss } from '../contact/virgil-tarikoss'

export const VirgilTarikossStrikeForce: MissionData = {
  key: 'virgil-tarikoss-strike-force',
  name: 'Virgil Tarikoss Strike Force',
  type: 'strike-force',
  morality: 'villainous',
  contactKeys: VirgilTarikoss.key,
  levelRange: [15, 20],
  links: [
    { title: 'Virgil Tarikoss Strike Force', href: 'https://homecoming.wiki/wiki/Virgil_Tarikoss_Strike_Force' },
  ],
}
