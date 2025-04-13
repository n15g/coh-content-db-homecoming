import { MissionData } from 'coh-content-db'
import { IceMistral } from '../contact/ice-mistral'

export const IceMistralStrikeForce: MissionData = {
  key: 'ice-mistral-strike-force',
  name: 'Ice Mistral Strike Force',
  type: 'strike-force',
  morality: 'villainous',
  contactKeys: IceMistral.key,
  levelRange: [35, 40],
  links: [
    { title: 'Ice Mistral Strike Force', href: 'https://homecoming.wiki/wiki/Ice_Mistral_Strike_Force' },
  ],
}
