import { MissionData } from 'coh-content-db'
import { EfficiencyExpertPither } from '../contact/efficiency-expert-pither'

export const GetInfoAboutMaltaGroup: MissionData = {
  key: 'get-info-about-malta-group',
  name: 'Get Info About Malta Group',
  type: 'mission',
  morality: 'villainous',
  contactKeys: EfficiencyExpertPither.key,
  levelRange: [45],
  links: [
    { title: 'Get Info About Malta Group', href: 'https://homecoming.wiki/wiki/Efficiency_Expert_Pither#Get_Info_About_Malta_Group' },
  ],
}
