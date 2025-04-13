import { MissionData } from 'coh-content-db'
import { LordRecluse } from '../contact/lord-recluse'

export const LordRecluseStrikeForce: MissionData = {
  key: 'lord-recluse-strike-force',
  name: 'Lord Recluse Strike Force',
  type: 'strike-force',
  morality: 'villainous',
  contactKeys: LordRecluse.key,
  levelRange: [45],
  links: [
    { title: 'Lord Recluse Strike Force', href: 'https://homecoming.wiki/wiki/Lord_Recluse_Strike_Force' },
  ],
}
