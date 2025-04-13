import { MissionData } from 'coh-content-db'
import { EfficiencyExpertPither } from '../contact/efficiency-expert-pither'

export const KickLongbowOutOfBase: MissionData = {
  key: 'kick-longbow-out-of-base',
  name: 'Kick Longbow out of base',
  type: 'mission',
  morality: 'villainous',
  contactKeys: EfficiencyExpertPither.key,
  levelRange: [45],
  links: [
    { title: 'Kick Longbow out of base', href: 'https://homecoming.wiki/wiki/Efficiency_Expert_Pither#Kick_Longbow_out_of_base' },
  ],
}
